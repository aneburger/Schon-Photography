/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 01
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";
import { useState } from "react";

{/* RECAPTHA IMPLEMENT!! 
    toast notif wanneer form submitted!
    
    */}




const ContactForm = ({ onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        type: '',
        date: '',
        venue: '',
        details: ''
    });

    const initialFormState = {
        name: '',
        number: '',
        email: '',
        type: '',
        date: '',
        venue: '',
        details: ''
    }

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [serverMessage, setServerMessage] = useState('');

    const validateForm = (name, value) => {
        let message = "";

        if (name === "name") {
            const fullName = value.trim().replace(/\s+/g, " ");
            if (!value) {
                message = "Full name is required.";
            } else if (value.length > 100) {
                message = "Maximum 100 characters allowed.";
            } else if (!/^[\p{L}]+(?:[-'][\p{L}]+)*(?: [\p{L}]+(?:[-'][\p{L}]+)*)*$/u.test(fullName)) {
                message = "Invalid full name. Only letters, spaces, hyphens, and apostrophes allowed.";
            }
        }

        if (name === "number") {
            if (!value) {
                message = "Phone number required.";
            } else if (value.length > 50) {
                message = "Maximum 50 characters allowed.";
            } else if (!/^\d{10,}$/.test(value)) {
                message = "Phone number must contain only digits (min 10).";
            }
        }

        if (name === "email") {
            if (!value) {
                message = "Email is required.";
            } else if (value.length > 50) {
                message = "Maximum 50 characters allowed.";
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                message = "Invalid email format.";
            }
        }

        if (name === "type") {
            if (!value || value === "Select option") {
                message = "Please select a booking type.";
            }
        }

        if (name === "date") {
            if (!value) {
                message = "Please select a date.";
            } else if (value.length > 50) {
                message = "Maximum 50 characters allowed.";
            }
        }

        if (name === "venue") {
            const venueTrimmed = value.trim().replace(/\s+/g, " ");
            if (!venueTrimmed) {
                message = "Venue / Location is required.";
            } else if (value.length > 100) {
                message = "Maximum 100 characters allowed.";
            } else if (!/^[\p{L}\d]+(?:[-'@&][\p{L}\d]+)*(?:[ ,][\p{L}\d]+(?:[-'@&][\p{L}\d]+)*)*$/u.test(venueTrimmed)) {
                message = "Invalid venue. Only letters, numbers, spaces, hyphens, apostrophes, commas, @, and & allowed.";
            }
        }

        if (name === "details") {
            if (!value) {
                message = "Please provide some details.";
            } else if (value.length > 200) {
                message = "Maximum 200 characters allowed.";
            } else if (!/^[\p{L}\d\s'!\-]{1,200}$/u.test(value)) {
                message = "Only letters, numbers, spaces, ', -, ! are allowed (max 200 chars).";
            }
        }

        setErrors((prev) => ({...prev, [name]: message }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerMessage('');

        const fields = Object.keys(formData);
        fields.forEach((field) => validateForm(field, formData[field]));
        const hasErrors = Object.values(errors).some((msg) => msg);
        if (hasErrors) return;

        setSubmitting(true);
        try {
            const token = await window.grecaptcha.execute('6Le9YB8sAAAAAP33qDBA_cPPKvud-xjmqmgWQCHJ', { action: 'contact_submit' });
            const res = await fetch('/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, captchaToken: token, captchaAction: 'contact_submit' }),
                credentials: 'same-origin'
            });

            const data = await res.json();
            if (!res.ok) {
                if (data?.errors) setErrors((prev) => ({ ...prev, ...data.errors }));
                setServerMessage(data?.message || 'Something went wrong. Please try again.');
            } else {
                setServerMessage('Thank you! Your enquiry has been sent.');
                setFormData(initialFormState);
            }
        } catch (err) {
            setServerMessage('Network error. Please try again later.');
        } finally {
            setSubmitting(false);
        }
    };

    const handleClear = () => {
        setFormData(initialFormState);
        setErrors({});
        setServerMessage('');
    };

    return (
        <div>
            <div>
                <h1>GET IN TOUCH</h1>
                <p>Every story begins with a simple hello. If something in our work resonates with you, we'd love to hear your vision.</p>
                <p>Please complete the form below to enquire. We can't wait to connect with you!</p>
                <p>daneschonborn@gmail.com</p>
                <p>+27 72 065 7083</p>
            </div>

            <form onSubmit={handleSubmit}>
                <h3>PERSONAL DETAILS</h3>

                <label htmlFor="name">FULL NAME <span>*</span></label>
                <input type="text" id="name" placeholder="Name & Surname"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={(e) => validateForm("name", e.target.value)}
                        maxLength={100}
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <label htmlFor="number">PHONE NUMBER <span>*</span></label>
                <input type="text" id="number" placeholder="012 345 6789"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        onBlur={(e) => validateForm("number", e.target.value)}
                        maxLength={50}
                />
                {errors.number && <p className="error">{errors.number}</p>}

                <label htmlFor="email">EMAIL <span>*</span></label>
                <input type="email" id="email" placeholder="example@email.com" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={(e) => validateForm("email", e.target.value)}
                        maxLength={50}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <h3>BOOKING DETAILS</h3>
                
                <label htmlFor="type">BOOKING TYPE <span>*</span></label>
                <select id="type" name="type"
                        value={formData.type}
                        onChange={handleChange}
                        onBlur={(e) => validateForm("type", e.target.value)}
                >
                    <option>Select option</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Couple Session">Couple Session</option>
                    <option value="Matric Farewell">Matric Farewell</option>
                    <option value="Other">Other</option>
                </select>
                {errors.type && <p className="error">{errors.type}</p>}

                <label htmlFor="date">DATE <span>*</span></label>
                <input type="date" id="date" placeholder="dd / mm / yy" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        onBlur={(e) => validateForm("date", e.target.value)}
                        maxLength={50}
                />
                {errors.date && <p className="error">{errors.date}</p>}

                <label htmlFor="venue">VENUE / LOCATION <span>*</span></label>
                <input type="text" id="venue" placeholder="E.g. De Harte Wedding Venue, Pretoria"
                        name="venue"
                        value={formData.venue}
                        onChange={handleChange}
                        onBlur={(e) => validateForm("venue", e.target.value)}
                        maxLength={100}
                />
                {errors.venue && <p className="error">{errors.venue}</p>}

                <label htmlFor="details">GIVE US SOME DETAILS! <span>*</span></label>
                <textarea id="details" name="details" placeholder="Share anything you think is important for us to know. We can't wait to get to know you and capture your special moments!" 
                        minLength={1} 
                        maxLength={200}
                        value={formData.details}
                        onChange={handleChange}
                        onBlur={(e) => validateForm("details", e.target.value)}            
                ></textarea>
                {errors.details && <p className="error">{errors.details}</p>}

                <button type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </form>
            {serverMessage && <p>{serverMessage}</p>}
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
}

export default ContactForm;
