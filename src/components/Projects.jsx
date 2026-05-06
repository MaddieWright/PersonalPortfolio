import './Projects.css';
import { useState, useRef, useEffect } from 'react';
import arc from '../assets/arc.jpeg';
import lit from '../assets/litlog.png';
import wine from '../assets/wine.png';
import mint from '../assets/mint-logo.png';
import stack from '../assets/stack-or-crack.jpeg';
import relinkd from '../assets/relinkd.png';
import startups from '../assets/startups.png';
import gis from '../assets/gis-icon.png';
import soup from '../assets/soup.png';

const filters = ['All', 'Hackathon', 'Web Dev', 'Open Source', 'Personal', 'Data/ML'];

const projects = [
    {
        title: 'Relinkd',
        year: '2026',
        category: 'Hackathon',
        image: relinkd,
        imageClass: '',
        description: 'A volunteer recruitment platform built for nonprofits. We used AI to match volunteers based on their skills, availability, and location, then made it easy to reach out via SMS with a live pipeline tracker to follow along.',
        links: [
            { label: 'GitHub', href: 'https://github.com/ssamiaa/youcode26' },
            { label: 'DevPost', href: 'https://devpost.com/software/relinkd' },
        ],
        tech: [
            'React, TypeScript & Vite for the frontend',
            'Tailwind CSS for styling',
            'Express.js (Node.js) for the backend',
            'Supabase (PostgreSQL) for database management',
            'Claude Haiku (Anthropic) for AI chat and matching',
            'Twilio for SMS integration',
            'Cloudinary for media storage and Pexels API for high-quality imagery',
        ],
    },
    {
        title: 'Stack or Crack',
        year: '2026 - Present',
        category: 'Hackathon',
        image: stack,
        imageClass: '',
        description: 'The AI landscape moves faster than any course can keep up with. Stack or Crack is a gamified platform where players learn the modern AI ecosystem by building out real tech stacks under pressure.',
        links: [
            { label: 'Try it out!', href: 'https://stack-or-crack.vercel.app' },
            { label: 'GitHub', href: 'https://github.com/ssamiaa/stack-or-crack' },
            { label: 'DevPost', href: 'https://devpost.com/software/stack-or-crack?ref_content=my-projects-tab&ref_feature=my_projectshttps://devpost.com/software/stack-or-crack?_gl=1*12m3zju*_gcl_au*MTY5OTQxMzQxMi4xNzcyNzc2NTQ3*_ga*MTEyNjU2MDAzMC4xNzcyNzc2NTQ4*_ga_0YHJK3Y10M*czE3NzMwNDExMTMkbzckZzEkdDE3NzMwNDExNTQkajE5JGwwJGgw' },
        ],
        tech: [
            'Next.js for frontend and backend',
            'Frontend specific: React + Vite, Tailwind CSS, Framer Motion',
            'Use of Anthropic Claude API - the evaluation system is powered by Claude Haiku',
            'Deployed on Vercel',
            'GitHub for version control and collaborative development',
        ],
    },
    {
        title: 'Soup Kitchen Database Management System',
        year: '2026',
        category: 'Personal',
        image: soup,
        imageClass: '',
        description: 'A full-stack database system built to help a soup kitchen manage its day-to-day operations. It handles volunteer and staff scheduling, food inventory with expiration tracking, donation records, and meal service coordination.',
        links: [
            { label: 'GitHub', href: 'https://github.com/MaddieWright/soup-kitchen-dbms' },
        ],
        tech: [
            'JavaScript (Node.js & React) for the full-stack application',
            'SQL for relational database queries and schema design',
            'Oracle Database as the backend database system',
        ],
    },
    {
        title: 'MINT Open Source System (MOSS)',
        year: '2025 - Present',
        category: 'Open Source',
        image: mint,
        imageClass: '',
        description: 'An open source neurotech platform for working with brain data. The goal is to make it easier to process, analyze, and visualize signals like EEG across different tools and platforms, all in one workspace.',
        links: [
            { label: 'MINT page', href: 'https://ubcmint.github.io/projects.html' },
        ],
        tech: [
            'Figma for collaborative UI design and layout planning',
            'TypeScript, JavaScript & CSS for building responsive, accessible interfaces',
            'React & React Flow for dynamic data visualization and user interaction',
            'GitHub for version control and collaborative development',
        ],
    },
    {
        title: 'UBC Startups',
        year: '2025 - 2026',
        category: 'Web Dev',
        image: startups,
        imageClass: 'project-image-white',
        description: 'The website I helped build for UBC Startups, a club for student builders and entrepreneurs at UBC. It covers who we are, our events, and resources for anyone looking to get involved.',
        links: [
            { label: 'Live Site', href: 'https://ubcstartups.com' },
        ],
        tech: [
            'React & JavaScript for building an interactive, component-based UI',
            'GitHub Pages for deployment and hosting',
            'GitHub for version control and collaborative development',
        ],
    },
    {
        title: 'GIS InnovateHer 2026',
        year: '2025 - 2026',
        category: 'Web Dev',
        image: gis,
        imageClass: '',
        description: 'The website for Girls In STEAM InnovateHer 2026, a club for women and non-binary students in STEAM. I worked as a web developer to build out a platform that highlights the organizations 2026 annual conference.',
        links: [
            { label: 'Live Site', href: 'https://innovateher2026.vercel.app' },
        ],
        tech: [
            'React & JavaScript for a dynamic, component-driven frontend',
            'CSS for custom styling and responsive layouts',
            'Deployed on Vercel for seamless continuous deployment',
            'GitHub for version control and collaboration',
        ],
    },
    {
        title: "Arc'onnect",
        year: '2025',
        category: 'Hackathon',
        image: arc,
        imageClass: '',
        description: "A Chrome extension built for the Arc'teryx community. It's a lightweight space for conversations, sharing events, and connecting with other people who love the brand.",
        links: [
            { label: 'GitHub', href: 'https://github.com/JennWan/Connect4' },
            { label: 'DevPost', href: 'https://devpost.com/software/arc-onnect' },
        ],
        tech: [
            'Figma for UI design, user flow mapping, and brand alignment',
            'HTML, CSS & JavaScript for a responsive, accessible frontend',
            'React for component structure and dynamic routing',
            'Chrome Extension APIs for browser integration',
            'GitHub for version control and collaboration',
        ],
    },
    {
        title: 'LitLog',
        year: '2024',
        category: 'Personal',
        image: lit,
        imageClass: '',
        description: "A personal library app I built in Java. You can add books, tag them by genre, track your reading progress, write reviews, and rate the ones you've finished.",
        links: [
            { label: 'GitHub', href: 'https://github.com/MaddieWright/LitLog' },
        ],
        tech: [
            'Developed using Java with a focus on object-oriented programming principles',
            'Designed a Swing GUI to provide a seamless and interactive user experience',
            'Used Visual Studio Code as the development environment',
            'Employed GitHub for version control and collaboration',
            'Practiced project planning and documentation for long-term maintainability',
        ],
    },
    {
        title: 'Red Wine Quality Prediction Model',
        year: '2024',
        category: 'Data/ML',
        image: wine,
        imageClass: '',
        description: 'We wanted to see if you could predict red wine quality using basic chemical attributes like pH and alcohol content. The idea was to build something that made sense to casual wine drinkers, not just data scientists.',
        links: [
            { label: 'GitHub', href: 'https://github.com/swallowmesea/37' },
        ],
        tech: [
            'Developed using R, focusing on data preprocessing, analysis, and model implementation',
            'Utilized Jupyter Notebooks for interactive development and visualization',
            'Implemented the K-Nearest Neighbors (KNN) algorithm to classify wine quality',
            'Used GitHub for version control and team collaboration',
            'Practiced research design and communication to maximize accessibility and impact',
        ],
    },
];

function Projects() {
    const [active, setActive] = useState('All');
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

    useEffect(() => {
        const cards = containerRef.current?.querySelectorAll('.project-card');
        if (!cards) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('card-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => observer.observe(card));
        return () => observer.disconnect();
    }, [filtered]);

    const handleFilter = (f) => {
        setActive(f);
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="projects-section" ref={sectionRef}>
            <h3>Projects</h3>

            <div className="filter-bar">
                {filters.map(f => (
                    <button
                        key={f}
                        className={`filter-btn ${active === f ? 'filter-btn-active' : ''}`}
                        onClick={() => handleFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>

            <div className="projects-container" ref={containerRef}>
                {filtered.map((project, index) => (
                    <div key={index} className="project-card" style={{ animationDelay: `${index * 0.08}s` }}>
                        <div className={`project-image ${project.imageClass}`}>
                            <img src={project.image} alt="" className="image" />
                        </div>
                        <div className="project-info">
                            <p className="projtitle">{project.title}</p>
                            <p className="year">{project.year}</p>
                            <p>{project.description}</p>
                            <div className="project-links">
                                {project.links.map((link, i) => (
                                    <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="description-link">
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="star-wrapper">
                            <span className="star">✦</span>
                            <span className="tech-label">Tech Stack</span>
                            <div className="techstack-box">
                                <h4>Tech Stack</h4>
                                <ul>
                                    {project.tech.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
