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
                        Hi, I’m Madilynn Wright! <br />
                        I’m from Toronto and currently living in Vancouver, where I’m studying a Combined Major in Science at UBC, focusing on Computer Science, Physics, and Earth and Ocean Sciences. I’ve always been drawn to the ways technology and the natural world intersect, which is why I love working on projects that blend science, creativity, and real-world impact.
                        <br />
                        Whether I’m building data tools, contributing to nonprofit software, or designing user-friendly experiences, I’m most excited when I’m solving meaningful problems with a team. I enjoy collaborating with curious, driven people—and I’m always looking to learn, grow, and build things that actually make a difference.                    </p>
                    <p className="values">
                        <h4>My Values</h4>
                        🔍 Curiosity – I love asking questions and digging deep to understand how things work. <br />
                        🌱 Growth – I embrace challenges as opportunities to improve, learn, and evolve. <br />
                        🤝 Collaboration – I believe diverse perspectives and open communication create the strongest solutions. <br />
                        🌎 Impact – I aim to work on projects that make a real difference in people’s lives or in the environment. <br />
                    </p>
                </div>
            </div>

            <div className="timeline-section">
                <h2>How I Got Here</h2>
                <div className="full-arrow-line"></div>
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