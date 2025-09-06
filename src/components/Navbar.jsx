import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../assets/logo.png';

import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false); // new function

    return (
        <header className="navbar">
            <Link to="/" className="logo" onClick={closeMenu}>
                <img src={logo} alt="logo" />
            </Link>

            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <Link to="/about" className="about" onClick={closeMenu}>About Me</Link>
                <Link to="/projects" className="projects" onClick={closeMenu}>Projects</Link>
                <Link to="/skills" className="skills" onClick={closeMenu}>Skills</Link>
                <Link to="/contact" className="contact" onClick={closeMenu}>Contact</Link>
            </nav>
        </header>
    );
}


export default Navbar;