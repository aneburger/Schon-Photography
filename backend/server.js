/*****************************************
 * Created On: 2025 / 11 / 28
 * Last Modified: 2025 / 11 / 28
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import express from 'express';
import path from 'path';
import validator from 'validator';
import { JSDOM } from 'jsdom';
import createDOMPurify from 'dompurify';
import nodemailer from 'nodemailer';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

app.use(express.static("frontend/public"));


function sanitizeInput(input) {
	return DOMPurify.sanitize(input, {
		USE_PROFILES: { html: false },
	}).trim();
}


app.post("/contact", (req, res) => {
	const errors = {};
	let {name, number, email, type, date, venue, details} = req.body;

	name = sanitizeInput(name);
    number = sanitizeInput(number);
    email = sanitizeInput(email);
    type = sanitizeInput(type);
    date = sanitizeInput(date);
    venue = sanitizeInput(venue);
    details = sanitizeInput(details);

	if (name && name.length > 100) errors.name = "Full name cannot exceed 100 characters.";
	if (number && number.length > 50) errors.number = "Phone number cannot exceed 50 characters.";
	if (email && email.length > 50) errors.email = "Email cannot exceed 50 characters.";
	if (date && date.length > 50) errors.date = "Date cannot exceed 50 characters.";
	if (venue && venue.length > 100) errors.venue = "Venue cannot exceed 100 characters.";
	if (details && details.length > 200) errors.details = "Details cannot exceed 200 characters.";

	if(!name) {
		errors.name = "Full name is required.";
	} else if (!/^[\p{L}]+(?:[-'][\p{L}]+)*(?: [\p{L}]+(?:[-'][\p{L}]+)*)+$/u.test(fullName)) {
        errors.name = "Invalid full name.";
    }

	if (!number) {
        errors.number = "Phone number required.";
    } else if (!validator.isNumeric(number) || number.length < 10) {
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
        "Other"
    ];

	if (!type || !validTypes.includes(type)) {
        errors.type = "Invalid booking type.";
    }

	if (!date) {
        errors.date = "Date is required.";
    } else if (!validator.isISO8601(date)) {
        errors.date = "Invalid date format.";
    }

	if (!venue) {
        errors.venue = "Venue is required.";
    } else if (!/^[\p{L}\d]+(?:[-'@&][\p{L}\d]+)*(?:[ ,][\p{L}\d]+(?:[-'@&][\p{L}\d]+)*)*$/u.test(venue)) {
        errors.venue = "Invalid venue.";
    }

	if (!details) {
        errors.details = "Details are required.";
    } else if (!validator.isLength(details, { max: 200 })) {
        errors.details = "Details cannot exceed 200 characters.";
    }

	if (Object.keys(errors).length > 0) {
        return res.status(400).json({ success: false, errors });
    }



	res.status(200).json({ success: true, message: "Form submitted successfully." });

});


app.get('/{*any}', (req, res) => res.sendFile(path.resolve('frontend', 'public', 'index.html')));	

app.listen(port, () => {
   	console.log(`Listening on http://localhost:${port}`);
});
