import './Home.css';
import Projects from './Projects'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const roles = [
    'Developer',
    'Problem Solver',
    'Builder',
    'Leader',
    'CS + PHYS Student @ UBC',
];

const TAGLINE = 'Driven by curiosity. Guided by values. Built with purpose.';

function Home() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [typedTagline, setTypedTagline] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => { if (window.scrollY > 80) setScrolled(true); };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            setTypedTagline(TAGLINE.slice(0, i + 1));
            i++;
            if (i >= TAGLINE.length) clearInterval(timer);
        }, 40);
        return () => clearInterval(timer);
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
                <p className='sub-head typewriter'>{typedTagline}</p>

                <div className="button-group">
                    <Link to="/projects">
                        <button>Explore My Work</button>
                    </Link>
                    <Link to="/contact">
                        <button>Let's Connect</button>
                    </Link>
                </div>
                <div className={`scroll-hint ${scrolled ? 'scroll-hint-hidden' : ''}`}>
                    <FiChevronDown />
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
