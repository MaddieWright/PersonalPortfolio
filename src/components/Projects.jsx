import './Projects.css';
import arc from '../assets/arc.jpeg';
import lit from '../assets/litlog.png';
import wine from '../assets/wine.png';
import mint from '../assets/mint-logo.png';
import stack from '../assets/stack-or-crack.jpeg';

function Projects() {
    return (
        <div className="projects-section">
            <h3>Projects</h3>
            <div className="projects-container">
                <div className="project-card reveal">
                    <div className="project-image">
                        <img src={stack} alt="" className="image" />
                    </div>
                    <div className="project-info">
                        <p className="projtitle">Stack or Crack</p>
                        <p className="year">2026 - Present</p>
                        <p>The AI landscape is evolving faster than any course can keep up with. Stack or Crack is a gamified learning platform that teaches the modern AI ecosystem by making players build real-time tech stacks.
                        </p>
                        <div className="project-links">
                            <a href="https://stack-or-crack.vercel.app" target="_blank" rel="noopener noreferrer" className="description-link">Try it out!</a>
                            <a href="https://github.com/ssamiaa/stack-or-crack" target="_blank" rel="noopener noreferrer" className="description-link">GitHub</a>
                            <a href="https://devpost.com/software/stack-or-crack?ref_content=my-projects-tab&ref_feature=my_projectshttps://devpost.com/software/stack-or-crack?_gl=1*12m3zju*_gcl_au*MTY5OTQxMzQxMi4xNzcyNzc2NTQ3*_ga*MTEyNjU2MDAzMC4xNzcyNzc2NTQ4*_ga_0YHJK3Y10M*czE3NzMwNDExMTMkbzckZzEkdDE3NzMwNDExNTQkajE5JGwwJGgw" target="_blank" rel="noopener noreferrer" className="description-link">DevPost</a>
                        </div>
                    </div>

                    <div className="star-wrapper">
                        <span className="star">✦</span>
                        <span className="tech-label">Tech Stack</span>
                        <div className="techstack-box">
                            <h4>Tech Stack</h4>
                            <ul>
                                <li>Next.js for frontend and backend</li>
                                <li>Frontend specific: React + Vite, Tailwind CSS, Framer Motion</li>
                                <li>Use of Anthropic Claude API - the evaluation system is powered by Claude Haiku</li>
                                <li>Deployed on Vercel</li>
                                <li>GitHub for version control and collaborative development</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="project-card reveal">
                    <div className="project-image">
                        <img src={mint} alt="" className="image" />
                    </div>
                    <div className="project-info">
                        <p className="projtitle">MINT Open Source System (MOSS)</p>
                        <p className="year">2025 - Present</p>
                        <p>An open source neurotech platform focused on building a brain data workspace where signals like EEG can be seamlessly processed, analyzed, and visualized across tools and platforms.
                        </p>
                        <div className="project-links">
                            <a href="https://ubcmint.github.io/projects.html" target="_blank" rel="noopener noreferrer" className="description-link">MINT page</a>
                        </div>
                    </div>

                    <div className="star-wrapper">
                        <span className="star">✦</span>
                        <span className="tech-label">Tech Stack</span>
                        <div className="techstack-box">
                            <h4>Tech Stack</h4>
                            <ul>
                                <li>Figma for collaborative UI design and layout planning</li>
                                <li>TypeScript, JavaScript & CSS for building responsive, accessible interfaces</li>
                                <li>React & React Flow for dynamic data visualization and user interaction</li>
                                <li>GitHub for version control and collaborative development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="project-card reveal">
                    <div className="project-image">
                        <img src={arc} alt="" className="image" />
                    </div>
                    <div className="project-info">
                        <p className="projtitle">Arc’connect</p>
                        <p className="year">2025</p>
                        <p>Arc’onnect is your window into the Arc’teryx community — a lightweight Chrome extension where conversations begin, events are shared, and relationships thrive.</p>
                        <div className="project-links">
                            <a href="https://github.com/JennWan/Connect4" target="_blank" rel="noopener noreferrer" className="description-link">GitHub</a>
                            <a href="https://devpost.com/software/arc-onnect" target="_blank" rel="noopener noreferrer" className="description-link">DevPost</a>
                        </div>
                    </div>

                    <div className="star-wrapper">
                        <span className="star">✦</span>
                        <span className="tech-label">Tech Stack</span>
                        <div className="techstack-box">
                            <h4>Tech Stack</h4>
                            <ul>
                                <li>Figma for UI design, user flow mapping, and brand alignment</li>
                                <li>HTML, CSS & JavaScript for a responsive, accessible frontend</li>
                                <li>React for component structure and dynamic routing</li>
                                <li>Chrome Extension APIs for browser integration</li>
                                <li>GitHub for version control and collaboration</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="project-card reveal">
                    <div className="project-image">
                        <img src={lit} alt="" className="image" />
                    </div>
                    <div className="project-info">
                        <p className="projtitle">LitLog</p>
                        <p className="year">2024</p>
                        <p>LitLog is a Java-based personal library management system that helps users organize and track their book collections. It allows users to add books, categorize them by genre or tags, update reading status, write reviews, and rate completed books.</p>
                        <div className="project-links">
                            <a href="https://github.com/MaddieWright/LitLog" target="_blank" rel="noopener noreferrer" className="description-link">GitHub</a>
                        </div>
                    </div>

                    <div className="star-wrapper">
                        <span className="star">✦</span>
                        <span className="tech-label">Tech Stack</span>
                        <div className="techstack-box">
                            <h4>Tech Stack</h4>
                            <ul>
                                <li>Developed using Java with a focus on object-oriented programming principles                                </li>
                                <li>Designed a Swing GUI to provide a seamless and interactive user experience                                </li>
                                <li>Used Visual Studio Code as the development environment                                </li>
                                <li>Employed GitHub for version control and collaboration                                </li>
                                <li>Practiced project planning and documentation for long-term maintainability</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="project-card reveal">
                    <div className="project-image">
                        <img src={wine} alt="" className="image" />
                    </div>
                    <div className="project-info">
                        <p className="projtitle">Red Wine Quality Prediction Model</p>
                        <p className="year">2024</p>
                        <p>This project explored whether red wine quality can be predicted using common chemical attributes like pH, alcohol content, etc. By focusing on variables familiar to casual wine drinkers, our goal was to create an intuitive model that identifies high-quality wines.</p>
                        <div className="project-links">
                            <a href="https://github.com/swallowmesea/37" target="_blank" rel="noopener noreferrer" className="description-link">GitHub</a>
                        </div>
                    </div>

                    <div className="star-wrapper">
                        <span className="star" >✦</span>
                        <span className="tech-label">Tech Stack</span>
                        <div className="techstack-box">
                            <h4>Tech Stack</h4>
                            <ul>
                                <li>Developed using R, focusing on data preprocessing, analysis, and model implementation                                </li>
                                <li>Utilized Jupyter Notebooks for interactive development and visualization     </li>
                                <li>Implemented the K-Nearest Neighbors (KNN) algorithm to classify wine quality                </li>
                                <li>Used GitHub for version control and team collaboration          </li>
                                <li>Practiced research design and communication to maximize accessibility and impact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Projects;
