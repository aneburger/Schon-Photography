/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 01
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";

const Carousel = () => {
    return (
        <div style={{border: "1px solid black", marginTop: "1em", backgroundColor: "#304529"}}>
            <img alt="logo" src="/assets/images/whiteLogo.png" height="80" />
            <h1>Schön Photography</h1>
            <h4>Artistic, Timeless and Elegant</h4>

            <img alt="leftArrow" src="/assets/images/left-arrow.png" height="80" />
            <img alt="rightArrow" src="/assets/images/right-arrow.png" height="80" />
        </div>
    );
}

export default Carousel;
