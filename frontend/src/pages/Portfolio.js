import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
    return (
        <div>
            Portfolio
            <Link to="/weddings">Weddings</Link>
            <Link to="/engagements">Engagements</Link>
            <Link to="/formals">Formals</Link>
            <Link to="/couples">Couples</Link>
        </div>
    );
}

export default Portfolio;
