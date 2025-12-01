import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <h1>Schön Photography</h1>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            Pricing & Services
            <Link to="/portfolio">Portfolio</Link> {/*  Dropdown: Weddings, Engagements, Formals, Couples */}
            Contact
        </div>
    );
}

export default NavBar;
