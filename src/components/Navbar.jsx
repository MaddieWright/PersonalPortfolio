import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import logo from '../assets/logo.png';

import { useState } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="navbar">
            <Link to="/" className="logo">
                <img src={logo} alt="logo" />
            </Link>

            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <Link to="/about" className="about">About Me</Link>
                <Link to="/projects" className="projects">Projects</Link>
                <Link to="/skills" className="skills">Skills</Link>
                <Link to="/contact" className="contact">Contact</Link>
            </nav>
        </header>

    );
}

export default Navbar;