import './Projects.css';
import arc from '../assets/arc.jpeg';
import lit from '../assets/litlog.png';
import wine from '../assets/wine.png';

function Projects() {
    return (
        <div className="projects-section">
            <h3>Projects</h3>
            <div className="projects-container">
                <div className="project-card">
                    <div className="project-image">
                        <img src={arc} alt="" className="image" />
                    </div>
                    <div className="project-info">
                        <p className="projtitle">Arc’connect</p>
                        <p className="year">2025</p>
                        <p>Arc’onnect is your window into the Arc’teryx community — a lightweight Chrome extension where conversations begin, events are shared, and relationships thrive.</p>
                        <a href="https://github.com/JennWan/Connect4" target="_blank" rel="noopener noreferrer" className="description-link">
                            Visit GitHub
                        </a>
                        <br></br><br></br>
                        <a href="https://devpost.com/software/arc-onnect" target="_blank" rel="noopener noreferrer" className="description-link">
                            Visit Devpost
                        </a>
                    </div>

                    <div className="star-wrapper">
                        <span className="star">⭐</span>
                        <div className="techstack-box">
                            <h4>Tech Stack</h4>
                            <ul>
                                <li>Figma for UI design, user flow mapping, and brand alignment</li>
                                <li>HTML, CSS & JavaScript for a responsive, accessible frontend</li>
                                <li>React for component structure and dynamic routing</li>
                                <li>Node.js to simulate backend logic and local data handling</li>
                                <li>Chrome Extension APIs for browser integration</li>
                                <li>GitHub for version control and collaboration</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src={lit} alt="" className="image" />
                    </div>
                    <div className="project-info">
                        <p className="projtitle">LitLog</p>
                        <p className="year">2024</p>
                        <p>LitLog is a Java-based personal library management system that helps users organize and track their book collections. It allows users to add books, categorize them by genre or tags, update reading status, write reviews, and rate completed books.</p>
                        <a href="https://github.com/MaddieWright/LitLog" target="_blank" rel="noopener noreferrer" className="description-link">
                            Visit GitHub
                        </a>
                    </div>

                    <div className="star-wrapper">
                        <span className="star">⭐</span>
                        <div className="techstack-box">
                            <h4>Tech Stack</h4>
                            <ul>
                                <li>Developed using Java with a focus on object-oriented programming principles                                </li>
                                <li>Designed a Swing GUI to provide a seamless and interactive user experience                                </li>
                                <li>Used Visual Studio Code as the development environment                                </li>
                                <li>Node.js to simulate backend logic and local data handling</li>
                                <li>Employed GitHub for version control and collaboration                                </li>
                                <li>Practiced project planning and documentation for long-term maintainability</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="project-image">
                        <img src={wine} alt="" className="image" />
                    </div>
                    <div className="project-info">
                        <p className="projtitle">Red Wine Quality Prediction Model</p>
                        <p className="year">2024</p>
                        <p>This project explored whether red wine quality can be predicted using common chemical attributes like pH, alcohol content, etc. By focusing on variables familiar to casual wine drinkers, our goal was to create an intuitive model that identifies high-quality wines.</p>
                        <a href="https://github.com/swallowmesea/37" target="_blank" rel="noopener noreferrer" className="description-link">
                            Visit GitHub
                        </a>
                    </div>

                    <div className="star-wrapper">
                        <span className="star">⭐</span>
                        <div className="techstack-box">
                            <h4>Tech Stack</h4>
                            <ul>
                                <li>Developed using R, focusing on data preprocessing, analysis, and model implementation                                </li>
                                <li>Utilized Jupyter Notebooks for interactive development and visualization     </li>
                                <li>Implemented the K-Nearest Neighbors (KNN) algorithm to classify wine quality                </li>
                                <li>Node.js to simulate backend logic and local data handling</li>
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
