/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 01
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";
import Footer from "../components/Footer";
import Connect from "../components/Connect";
import Carousel from "../components/Carousel";
import SouthAfrican from "../components/SouthAfrican";
import Welcome from "../components/Welcome";
import Favourite from "../components/Favourite";
import Services from "../components/Services";

const Home = () => {
    return (
        <div>
            <Carousel/>
            <SouthAfrican/>
            <Welcome/>
            <Favourite/>
            <Services/>

            <Connect/>
            <Footer/>
        </div>
    );
}

export default Home;
