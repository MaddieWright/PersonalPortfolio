import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar() {
    return (
      <header className="navbar">
        <Link to="/" className="logo"><img src="./src/assets/logo.png" alt="" /></Link>
        <nav className="nav-links">
          <Link to="/about" className="about">About Me</Link>
          <Link to="/projects" className="projects">Projects</Link>
          <Link to="/skills" className="skills">Skills</Link>
          <Link to="/contact" className="contact">Contact</Link>
        </nav>
      </header>
    );
  }