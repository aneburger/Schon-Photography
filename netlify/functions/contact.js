import validator from "validator";
// import { JSDOM } from "jsdom";
// import createDOMPurify from "dompurify";
import FormData from "form-data";
import Mailgun from "mailgun.js";
import fetch from "node-fetch";
import { URLSearchParams } from "url";

// const window = new JSDOM("").window;
// const DOMPurify = createDOMPurify(window);

// ---------------- UTILITIES ----------------

// function sanitizeInput(input) {
//   const safe = typeof input === "string" ? input : "";
//   return DOMPurify.sanitize(safe, { USE_PROFILES: { html: false } }).trim();
// }

function sanitizeInput(input) {
  if (typeof input !== "string") return "";
  const trimmed = input.trim();
  const noControl = validator.stripLow(trimmed, true);
  return noControl.replace(/[<>]/g, "");
}

function onlyDigits(str) {
  return (str || "").replace(/\D+/g, "");
}

// ---------------- HANDLER ----------------

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: "Invalid JSON." }),
    };
  }

  // ---------------- CAPTCHA ----------------
  try {
    const token = sanitizeInput(body.captchaToken);
    const action = sanitizeInput(body.captchaAction);

    if (!token)
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, message: "Captcha required." }),
      };

    const secret = process.env.RECAPTCHA_SECRET;
    const minScore = parseFloat(process.env.RECAPTCHA_MIN_SCORE || "0.5");

    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret,
          response: token,
          remoteip: event.headers["x-nf-client-connection-ip"] || "",
        }),
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return {
        statusCode: 429,
        body: JSON.stringify({
          success: false,
          message: "Captcha verification failed.",
        }),
      };
    }

    if (verifyData.action && action && verifyData.action !== action) {
      return {
        statusCode: 429,
        body: JSON.stringify({
          success: false,
          message: "Captcha action mismatch.",
        }),
      };
    }

    if (typeof verifyData.score === "number" && verifyData.score < minScore) {
      return {
        statusCode: 429,
        body: JSON.stringify({
          success: false,
          message: "Captcha score too low.",
        }),
      };
    }
  } catch (e) {
    return {
      statusCode: 429,
      body: JSON.stringify({
        success: false,
        message: "Captcha verification error.",
      }),
    };
  }

  // ---------------- VALIDATION ----------------

  const errors = {};
  let { name, number, email, type, date, venue, details } = body;

  name = sanitizeInput(name);
  number = sanitizeInput(number);
  email = sanitizeInput(email);
  type = sanitizeInput(type);
  date = sanitizeInput(date);
  venue = sanitizeInput(venue);
  details = sanitizeInput(details);

  if (name && name.length > 100)
    errors.name = "Full name cannot exceed 100 characters.";
  if (number && number.length > 50)
    errors.number = "Phone number cannot exceed 50 characters.";
  if (email && email.length > 50)
    errors.email = "Email cannot exceed 50 characters.";
  if (date && date.length > 50) errors.date = "Date cannot exceed 50 characters.";
  if (venue && venue.length > 100)
    errors.venue = "Venue cannot exceed 100 characters.";
  if (details && details.length > 200)
    errors.details = "Details cannot exceed 200 characters.";

  if (!name) {
    errors.name = "Full name is required.";
  } else {
    const fullName = name.replace(/\s+/g, " ").trim();
    if (
      !/^[\p{L}]+(?:[-'][\p{L}]+)*(?: [\p{L}]+(?:[-'][\p{L}]+)*)*$/u.test(
        fullName
      )
    ) {
      errors.name = "Invalid full name.";
    }
  }

  const digitsOnly = onlyDigits(number);
  if (!number) {
    errors.number = "Phone number required.";
  } else if (digitsOnly.length < 10) {
    errors.number = "Phone number must be at least 10 digits.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (!validator.isEmail(email)) {
    errors.email = "Invalid email format.";
  }

  const validTypes = [
    "Wedding",
    "Engagement",
    "Couple Session",
    "Matric Farewell",
    "Other",
  ];

  if (!type || !validTypes.includes(type)) {
    errors.type = "Invalid booking type.";
  }

  if (!date) {
    errors.date = "Date is required.";
  } else if (!validator.isISO8601(date, { strict: true })) {
    errors.date = "Invalid date format.";
  }

  if (!venue) {
    errors.venue = "Venue is required.";
  } else if (
    !/^[\p{L}\d]+(?:[-'@&][\p{L}\d]+)*(?:[ ,][\p{L}\d]+(?:[-'@&][\p{L}\d]+)*)*$/u.test(
      venue
    )
  ) {
    errors.venue = "Invalid venue.";
  }

  if (!details) {
    errors.details = "Details are required.";
  } else if (!validator.isLength(details, { max: 200 })) {
    errors.details = "Details cannot exceed 200 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, errors }),
    };
  }

  // ---------------- SEND MAIL (MAILGUN) ----------------

  try {
    const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY || process.env.API_KEY;
    const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
    const TO_EMAIL = process.env.TO_EMAIL;
    const FROM_EMAIL =
      process.env.FROM_EMAIL || `postmaster@${MAILGUN_DOMAIN}`;

    if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN || !TO_EMAIL) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          message: "Email service not configured.",
        }),
      };
    }

    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({ username: "api", key: MAILGUN_API_KEY });

    const subject = `New ${type} enquiry from ${name}`;
    const textBody = `Name: ${name}
        Phone: ${number}
        Email: ${email}
        Type: ${type}
        Date: ${date}
        Venue: ${venue}
        Details:
        ${details}`;

            const htmlBody = `
        <h2>New Booking Enquiry</h2>
        <p><strong>Name:</strong> ${validator.escape(name)}</p>
        <p><strong>Phone:</strong> ${validator.escape(number)}</p>
        <p><strong>Email:</strong> ${validator.escape(email)}</p>
        <p><strong>Type:</strong> ${validator.escape(type)}</p>
        <p><strong>Date:</strong> ${validator.escape(date)}</p>
        <p><strong>Venue:</strong> ${validator.escape(venue)}</p>
        <p><strong>Details:</strong><br/>${validator.escape(details)}</p>
        `;

    await mg.messages.create(MAILGUN_DOMAIN, {
      from: `Booking Form <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject,
      text: textBody,
      html: htmlBody,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: "Form submitted successfully.",
      }),
    };
  } catch (error) {
    console.error("Mailgun error:", error);

    const msg =
      error?.message ||
      error?.response?.body?.message ||
      "Failed to send email.";

    return {
      statusCode: 502,
      body: JSON.stringify({ success: false, message: msg }),
    };
  }
};
