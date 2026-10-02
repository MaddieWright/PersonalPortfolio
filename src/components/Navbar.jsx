import { Link, useLocation } from "react-router-dom";
import './Navbar.css';
import logo from '../assets/logo.png';

import { useState, useEffect } from 'react';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveSection('');
            return;
        }

        const sections = ['about', 'projects', 'skills', 'contact'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
        );

        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [location.pathname]);

    const sectionActive = (id) => location.pathname === '/' && activeSection === id;

    return (
        <header className="navbar">
            {menuOpen && <div className="nav-overlay" onClick={closeMenu} />}
            <Link to="/" className="logo" onClick={closeMenu}>
                <img src={logo} alt="logo" />
            </Link>

            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <Link to="/about" className={`about ${isActive('/about') || sectionActive('about') ? 'nav-active' : ''}`} onClick={closeMenu}>About Me</Link>
                <Link to="/projects" className={`projects ${isActive('/projects') || sectionActive('projects') ? 'nav-active' : ''}`} onClick={closeMenu}>Projects</Link>
                <Link to="/skills" className={`skills ${isActive('/skills') || sectionActive('skills') ? 'nav-active' : ''}`} onClick={closeMenu}>Skills</Link>
                <Link to="/contact" className={`contact ${isActive('/contact') || sectionActive('contact') ? 'nav-active' : ''}`} onClick={closeMenu}>Contact</Link>
            </nav>
        </header>
    );
}


export default Navbar;
