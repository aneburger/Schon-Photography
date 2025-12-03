/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 01
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";
import { Link } from "react-router-dom";
import PortfolioTitle from "../components/PortfolioTitle";
import Footer from "../components/Footer";

const Portfolio = () => {
    return (
        <div>
            <PortfolioTitle/>

            <Link to="/portfolio/weddings">Weddings</Link>
            <Link to="/portfolio/engagements">Engagements</Link>
            <Link to="/portfolio/formals">Formals</Link>
            <Link to="/portfolio/couples">Couples</Link>
            <Link to="/portfolio/family">Family</Link>

            <Footer/>
        </div>
    );
}

export default Portfolio;
