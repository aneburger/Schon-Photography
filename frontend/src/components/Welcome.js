import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div style={{border: "1px solid black", marginTop: "4em", marginBottom: "4em", backgroundColor: "#91A083"}}>
            {/* Image! */}
            <h1>WELCOME TO SCHÖN PHOTOGRAPHY</h1>
            <h3>We're a mother and daughter photography duo, bound not only by love but by a shared vision — to tell stories through light, connection, and the quiet beauty of real moments.</h3>
            <Link to="/about">MEET THE DUO</Link>
            <img alt="logo" src="/assets/images/up-right-arrow.png" height="20" />
        </div>
    );
}

export default Welcome;
