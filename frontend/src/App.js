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

const App = () => {
    return (
            <BrowserRouter>
                <NavBar/>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/portfolio" element={<Portfolio/>}/>
                        <Route path="/portfolio/weddings" element={<Weddings/>}/>
                        <Route path="/portfolio/engagements" element={<Engagements/>}/>
                        <Route path="/portfolio/formals" element={<Formals/>}/>
                        <Route path="/portfolio/couples" element={<Couples/>}/>
                        <Route path="/portfolio/family" element={<Family/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
    );
}

export default App;
