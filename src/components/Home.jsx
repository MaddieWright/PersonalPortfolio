import './Home.css';
import Projects from './Projects'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const roles = [
    'Developer',
    'Problem Solver',
    'Builder',
    'Leader',
    'CS + PHYS Student @ UBC',
];

function Home() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setRoleIndex(i => (i + 1) % roles.length);
                setFade(true);
            }, 400);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className='main-container'>
                <p className='head'>Hi, I'm Madilynn Wright</p>
                <p className='sub-head'>
                    <span className={`rotating-role ${fade ? 'fade-in' : 'fade-out'}`}>
                        {roles[roleIndex]}
                    </span>
                </p>
                <p className='sub-head'>Driven by curiosity. Guided by values. Built with purpose.</p>

                <div className="button-group">
                    <Link to="/projects">
                        <button>Explore My Work</button>
                    </Link>
                    <Link to="/contact">
                        <button>Let's Connect</button>
                    </Link>
                </div>
            </div>
            <div className="sections-wrapper">
                <About />
                <Projects />
                <Skills />
                <Contact />
            </div>
        </div>
    );
}

export default Home;
