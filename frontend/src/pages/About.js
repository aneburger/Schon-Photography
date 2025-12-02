/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 01
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";
import AboutTheDuo from "../components/AboutTheDuo";
import Hi from "../components/Hi";
import WhySchon from "../components/WhySchon";
import Quote from "../components/Quote";
import Approach from "../components/Approach";
import Connect from "../components/Connect";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <AboutTheDuo/>
            <Hi/>
            <WhySchon/>
            <Quote/>
            <Approach/>
            
            <Connect/>
            <Footer/>
        </div>
    );
}

export default About;
