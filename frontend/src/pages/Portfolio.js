import React from "react";
import { Link } from "react-router-dom";
import PortfolioTitle from "../components/PortfolioTitle";
import Footer from "../components/Footer";

const Portfolio = () => {
    return (
        <div>
            <PortfolioTitle/>

            <Link to="/weddings">Weddings</Link>
            <Link to="/engagements">Engagements</Link>
            <Link to="/formals">Formals</Link>
            <Link to="/couples">Couples</Link>

            <Footer/>
        </div>
    );
}

export default Portfolio;
