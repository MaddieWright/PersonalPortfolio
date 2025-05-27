import './About.css';
import me from '../assets/me2.jpeg';

function About() {
    return (
        <div className="about-section">
            <h2>Get to know me more...</h2>
            <div className="intro-row">
                <div className="myself-image">
                    <img src={me} alt="" className="image" />
                </div>

                <div className="intro-container">
                    <p className="bio">
                        Hi, I’m Madilynn Wright from Toronto, currently studying a Combined Major in Science at UBC in Vancouver with a focus on Computer Science, Physics, and Earth and Ocean Sciences. I chose this path because I love exploring the intersections of technology and the natural world. I’m especially interested in projects that combine scientific insight with creative problem-solving—whether it's building tools for data analysis, contributing to meaningful software for nonprofits, or designing user experiences that make knowledge more accessible. I thrive in team environments where curiosity drives innovation and where every project leaves a lasting impact. I’m always eager to grow, collaborate, and create things that matter.
                    </p>
                    <p className="values">
                        <h4>My Values</h4>
                        🔍 Curiosity – I seek out knowledge and ask thoughtful questions to deeply understand the world. <br />
                        🌱 Growth – I embrace challenges as opportunities to improve, learn, and evolve. <br />
                        🤝 Collaboration – I believe diverse perspectives and open communication create the strongest solutions. <br />
                        🌎 Impact – I aim to work on projects that make a real difference in people’s lives or in the environment. <br />
                    </p>
                </div>
            </div>

            <div className="timeline-section">
                <h2>How I Got Here</h2>
                <div className="full-arrow-line">────────────────────────────────────────────────────────────────────→</div>

                <div className="timeline-horizontal">
                    {[
                        {
                            year: "2019",
                            title: "Started High school & took first tech class",
                            bullets: [
                                "Discovered coding",
                                "Fell in love with logic and problem-solving",
                            ],
                        },
                        {
                            year: "2023",
                            title: "Moved to Vancouver, BC to start as a Faculty of Science student at UBC",
                            bullets: [],
                        },
                        {
                            year: "2023-2024",
                            title: "First University Projects & Involvement",
                            bullets: ["Made my first data model",
                                "Built my first full solo Java application",
                                "Started volunteering for club hackathons",
                                "Started combining science & software in my coursework and personal interests"],
                        },
                        {
                            year: "2024-2025",
                            title: "Hackathons, Team Projects, & Frontend Exploration",
                            bullets: ["Participated in my first hackathon",
                                "Started gaining curiosity for frontend development and explored it through development of side projects",
                                "Started learning how design, storytelling, and user experience shape meaningful tools"],
                        },
                        {
                            year: "2025",
                            title: "Growing Beyond the Classroom",
                            bullets: ["Began developing skills outside of coursework through personal projects, online learning, and exploring design and web dev",
                                "Actively seeking opportunities to apply and grow—in research, internships, and team-based builds that align with my values"],
                        },
                        {
                            year: "Looking Ahead...",
                            title: "",
                            bullets: ["I’m excited to keep growing as a developer and creator—especially where technology, science, and human-centered design overlap."],
                        },
                    ].map((event, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker">|</div>
                            <div className="timeline-info">
                                <span className="timeline-year">{event.year}</span>
                                <h4 className="timeline-title">{event.title}</h4>
                                <ul className="timeline-bullets">
                                    {event.bullets.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>

    );
}

export default About;