import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Services = () => {
    return (
        <div style={{border: "1px solid black", marginTop: "4em", marginBottom: "4em"}}>
            <h1>SERVICES & INVESTMENT</h1>
            <h3>MORE INFORMATION ABOUT PRICING, PACKAGES, AND WHAT TO EXPECT</h3>
            <p>For a more comprehensive overview or to enquire about additional sessions, please feel free to reach out, and we will happily provide the information.</p>
            
            {/* React/UI component met cards langs mekaar en hover effects. */}
            <div id="w-package" style={{border: "1px solid black", marginTop: "2em"}}>
                <h2>WEDDING PACKAGES</h2>
                <h3>STARTING AT R9 800</h3>
                <p>Fill in our contact form to receive our full wedding packages for all the details.</p>
                <Contact buttonText={"Enquire"}/>
            </div>

            <div id="e-package" style={{border: "1px solid black", marginTop: "2em"}}>
                <h2>ENGAGEMENT PACKAGES</h2>
                <h3>STARTING AT R850</h3>
                <p>For a surprise engagement, send us a message and we'll help you make sure every moment is captured.</p>
                <Contact buttonText={"Enquire"}/>
            </div>

            <div id="f-package" style={{border: "1px solid black", marginTop: "2em"}}>
                <h2>FORMAL PACKAGES</h2>
                <h3>STARTING AT R1000</h3>
                <p>Matric Farewell packages start at 1 hour per couple. Feel free to reach out if you're booking for a larger group.</p>
                <Contact buttonText={"Enquire"}/>
            </div>

            <div id="c-package" style={{border: "1px solid black", marginTop: "2em"}}>
                <h2>COUPLE SESSIONS</h2>
                <h3>STARTING AT R600</h3>
                <p>All couple sessions are one hour minimum. You're welcome to enquire about extended session options.</p>
                <Contact buttonText={"Enquire"}/>
            </div>

            <div id="fam-package" style={{border: "1px solid black", marginTop: "2em"}}>
                <h2>FAMILY SESSIONS</h2>
                <h3>STARTING AT R850</h3>
                <p>To capture your family's memories.</p>
                <Contact buttonText={"Enquire"}/>
            </div>
        </div>
    );
}

export default Services;
