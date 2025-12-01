import React from "react";

const ContactForm = ({ onCancel }) => {
    return (
        <div>
            <div>
                <h1>GET IN TOUCH</h1>
                <p>Every story begins with a simple hello. If something in our work resonates with you, we'd love to hear your vision.</p>
                <p>Please complete the form below to enquire. We can't wait to connect with you!</p>
                <p>schon.photography@gmail.com</p>
                <p>+27 12 345 6789</p>
            </div>

            <form>
                <h3>PERSONAL DETAILS</h3>

                <label htmlFor="name">FULL NAME <span>*</span></label>
                <input type="text" id="name" placeholder="Name & Surname" required />

                <label htmlFor="number">PHONE NUMBER <span>*</span></label>
                <input type="text" id="number" placeholder="012 345 6789" required />

                <label htmlFor="email">EMAIL <span>*</span></label>
                <input type="email" id="email" placeholder="example@email.com" required />

                <h3>BOOKING DETAILS</h3>
                
                <label htmlFor="type">BOOKING TYPE <span>*</span></label>
                <select id="type" name="booking-type">
                    <option defaultValue="Select option">Select option</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Couple Session">Couple Session</option>
                    <option value="Matric Farewell">Matric Farewell</option>
                    <option value="Other">Other</option>
                </select>

                <label htmlFor="date">DATE <span>*</span></label>
                <input type="date" id="date" placeholder="dd / mm / yy" required />

                <label htmlFor="venue">VENUE / LOCATION <span>*</span></label>
                <input type="text" id="venue" placeholder="E.g. De Harte Wedding Venue, Pretoria" required />

                <label htmlFor="details">GIVE US SOME DETAILS! <span>*</span></label>
                <textarea id="details" name="details" placeholder="Share anything you think is important for us to know. We can't wait to get to know you and capture your special moments!"></textarea>

                <button>Submit</button>
                <button>Clear</button>
            </form>

            <button onClick={onCancel}>Cancel</button>
        </div>
    );
}

export default ContactForm;
