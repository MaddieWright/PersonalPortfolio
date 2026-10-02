import React from 'react';
import './Skills.css';
import resume from '../assets/resume.pdf';

const skillCategories = [
    {
        title: 'Languages',
        items: ['Java', 'C++', 'Python', 'R', 'CSS', 'JavaScript', 'TypeScript', 'C', 'HTML', 'Racket', 'x86 Assembly'],
    },
    {
        title: 'Tools & Platforms',
        items: ['Figma', 'Git & GitHub', 'VSCode', 'Azure Machine Learning', 'Jupyter Notebook', 'Command Line/Terminal', 'R Studio'],
    },
    {
        title: 'Frameworks',
        items: ['JAX', 'React', 'React Flow', 'Tailwind CSS', 'Node.js', 'Swing', 'JUnit'],
    },
    {
        title: 'Soft',
        items: ['Problem-solving', 'Communication & Collaboration', 'Initiative & Self-Directed Learning', 'Project planning & time management', 'Rapid learning & adaptability', 'Scientific Literacy & Interdisciplinary Thinking'],
    },
];

const SkillsSection = () => {
    return (
        <section className="skills-section">
            <div className="header">
                <h2>Skills & Tech Stack</h2>
            </div>
            <div className="resume-button">
                <a href={resume} target="_blank" rel="noopener noreferrer">
                    <button>Visit Resume</button>
                </a>
            </div>
            <div className="skills-grid">
                {skillCategories.map((category) => (
                    <div key={category.title} className="skill-category reveal">
                        <h3>{category.title}</h3>
                        <div className="skill-items">
                            {category.items.map((item, i) => (
                                <div
                                    key={item}
                                    className="skill-item"
                                    style={{ animationDelay: `${i * 0.07}s` }}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;

