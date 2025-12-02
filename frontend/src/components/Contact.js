/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 01
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";
import { useState } from "react";
import ContactForm from "./ContactForm";

const Contact = ({ buttonText }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((isOpen) => !isOpen);
    };  

    return (
        <div>
            Contact
            <button onClick={toggle}>{buttonText}</button>
            { isOpen && <ContactForm onCancel={toggle} /> }
        </div>
    );
}

export default Contact;
