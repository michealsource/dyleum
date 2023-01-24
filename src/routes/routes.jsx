import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../pages/About/About";
import Learn from "../pages/Learn/Learn";
import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import styles from './routes.module.css'
import Footer from "../components/Footer/Footer";
import OurTeam from "../pages/OurTeam/OurTeam";
import Contact from "../pages/Contact/Contact";
import Faq from "../pages/Faq/Faq";

const RoutesContainer = () => {
    const location = useLocation();
    return (
        <div
            className={
                (location.pathname === '/about' || location.pathname === '/learn') ? styles.aboutBgImage
                    : (location.pathname === '/contact' || location.pathname === '/team') ? styles.otherBackgroundRoutes
                        : styles.homeBackground}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/team" element={<OurTeam />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default RoutesContainer
