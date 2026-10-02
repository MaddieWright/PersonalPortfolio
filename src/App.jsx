import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import './App.css'

function AppContent() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const timer = setTimeout(() => {
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        }, 50);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, [location.pathname]);

    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
            setScrollProgress(scrollTop / (scrollHeight - clientHeight) * 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
            <div className="spotlight" />
            <Navbar />
            <div className="page-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App
