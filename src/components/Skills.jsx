import React from 'react';
import './Skills.css';
import resume from '../assets/resume.pdf';

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
                <div className="skill-category">
                    <h3>Languages</h3>
                    <div className="skill-items">
                        <div className="skill-item">Java</div>
                        <div className="skill-item">Python</div>
                        <div className="skill-item">R</div>
                        <div className="skill-item">CSS</div>
                        <div className="skill-item">JavaScript</div>
                        <div className="skill-item">C</div>
                        <div className="skill-item">HTML</div>
                        <div className="skill-item">Racket</div>
                        <div className="skill-item">x86 Assembly</div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Tools & Platforms</h3>
                    <div className="skill-items">
                        <div className="skill-item">Figma</div>
                        <div className="skill-item">Git & GitHub</div>
                        <div className="skill-item">VSCode</div>
                        <div className="skill-item">Jupyter Notebook</div>
                        <div className="skill-item">Command Line/Terminal</div>
                        <div className="skill-item">R Studio</div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Frameworks</h3>
                    <div className="skill-items">
                        <div className="skill-item">React</div>
                        <div className="skill-item">Node.js</div>
                        <div className="skill-item">Swing</div>
                        <div className="skill-item">JUnit</div>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Soft</h3>
                    <div className="skill-items">
                        <div className="skill-item">Problem-solving</div>
                        <div className="skill-item">Communication & Collaboration</div>
                        <div className="skill-item">Initiative & Self-Directed Learning</div>
                        <div className="skill-item">Project planning & time management</div>
                        <div className="skill-item">Rapid learning & adaptability</div>
                        <div className="skill-item">Scientific Literacy & Interdisciplinary Thinking</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;

