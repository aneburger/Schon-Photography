/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 01
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer style={{border: "1px solid black", marginTop: "1em"}}>
            <div>
                <h3>Follow us on Instagram</h3>
                <h3>@schon.weddings</h3> {/*  LINK TO THE INSTAGRAM PAGE!! */}
            </div>

            {/*  LINE */}

            <img alt="logo" src="/assets/images/greenLogo.png" height="20" />

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            Pricing & Services
            <Link to="/portfolio">Portfolio</Link> {/*  Dropdown: Weddings, Engagements, Formals, Couples */}
            Contact

            <img alt="Facebook Logo" src="/assets/images/facebook.png" height="20" />
            <img alt="Instagram Logo" src="/assets/images/insta.png" height="20" />

            {/*  LINE */}

            <p>&copy; 2025 Schön Photography</p>
            <div id="arroww">
                <p>Powered by <Link>Arroww</Link></p> {/* LINK TO ARROWW WEBSITE!! */}
            </div>

            {/* BACK TO TOP BUTTONS !! */}            
        </footer>
    );
}

export default Footer;
