/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 01
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";
import { Link } from "react-router-dom";

const Favourite = () => {
    return (
        <div style={{border: "1px solid black", marginTop: "4em", marginBottom: "4em"}}>
            {/* Image! */}
            <h1>OUR FAVOURITE MOMENTS</h1>
            <div id="favourites-grid">

            </div>
            <Link to="/portfolio">EXPLORE OUR WORK</Link>
            <img alt="logo" src="/assets/images/up-right-arrow-green.png" height="20" />
        </div>
    );
}

export default Favourite;
