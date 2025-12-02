/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 01
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";
import Contact from "./Contact";

const Connect = () => {
    return (
        <div style={{border: "1px solid black", marginTop: "1em"}}>
            <h3>Let's Connect</h3>
            <p>We look forward to hearing from you and to help you craft memories that will linger, timeless and ever true.</p>
            <Contact buttonText={"Contact Us"}/>
        </div>
    );
}

export default Connect;
