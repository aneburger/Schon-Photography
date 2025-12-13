/*****************************************
 * Created On: 2025 / 12 / 01
 * Last Modified: 2025 / 12 / 01
 * 
 * Author: Ané Burger t.a. Arroww Web Dev
 * 
******************************************/

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Weddings from "./pages/Weddings";
import Engagements from "./pages/Engagements";
import Formals from "./pages/Formals";
import Couples from "./pages/Couples";
import Family from "./pages/Family";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
    return (
            <BrowserRouter>
                <NavBar/>
                <ScrollToTop/>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
    );
}

export default App;
