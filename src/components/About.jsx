import './About.css';
import me from '../assets/me2.jpeg';
import { useRef, useEffect, useState } from 'react';
import { FiSearch, FiTrendingUp, FiUsers, FiGlobe, FiArrowRight, FiChevronDown } from 'react-icons/fi';

function About() {
    const timelineRef = useRef(null);
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(prev => prev === index ? null : index);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (timelineRef.current) observer.observe(timelineRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-section">
            <h2>Get to know me more...</h2>
            <div className="intro-row reveal">
                <div className="myself-image">
                    <img src={me} alt="" className="image" />
                </div>

                <div className="intro-container">
                    <p className="bio">
                        Hi, I'm Madilynn Wright! <br />
                        I'm originally from Toronto and now living in Vancouver, studying Computer Science and Physics as a Combined Major in Science student at UBC. I've always been drawn to the intersection of technology and the natural world, which is why I find myself gravitating toward projects that mix science, creativity, and something that actually matters.
                        <br />
                        I do my best work with a team. Whether that's building data tools, contributing to nonprofit software, or figuring out how to make something feel intuitive and useful, I like solving problems that are worth solving. I'm always looking to learn, and I care a lot about the people I build things with and the people I build things for.
                    </p>
                    <div className="values">
                        <h4>My Values</h4>
                        <ul className="values-list">
                            <li><FiSearch className="value-icon" /> <strong>Curiosity</strong> <FiArrowRight className="value-arrow" /> I like asking questions and actually digging into the answers.</li>
                            <li><FiTrendingUp className="value-icon" /> <strong>Growth</strong> <FiArrowRight className="value-arrow" /> I try to treat challenges as chances to get better, not just get through it.</li>
                            <li><FiUsers className="value-icon" /> <strong>Collaboration</strong> <FiArrowRight className="value-arrow" /> I genuinely believe different perspectives make the work stronger.</li>
                            <li><FiGlobe className="value-icon" /> <strong>Impact</strong> <FiArrowRight className="value-arrow" /> I want what I build to matter, whether that's to a user, a community, or the planet.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="timeline-section">
                <h2>How I Got Here</h2>
                <div className="full-arrow-line"></div>
                <div className="timeline-horizontal" ref={timelineRef}>
                    {[
                        {
                            year: "Stay Tuned...",
                            title: "",
                            bullets: [],
                        },
                        {
                            year: "September 2026",
                            title: "A New Chapter in Vancouver",
                            bullets: [
                                "Settled into my AI Developer co-op at Ideon Technologies (extended summer contract), working on AI/ML projects and getting to see what it looks like to apply research and experimentation in a real-world setting",
                                "Started my fourth year at UBC while balancing co-op, coursework, and everything else happening outside the classroom",
                                "Officially stepped into my role as Co-President of UBC Startups, working with an amazing team to build out our plans for the year",
                            ],
                        },
                        {
                            year: "May 2026",
                            title: "First Co-op, New Role & First Vancouver Summer",
                            bullets: [
                                "Starting my first co-op as an AI Developer at Ideon Technologies, really excited to bring what I know into a real professional setting",
                                "Got elected Co-President of UBC Startups, stepping into a leadership role I feel genuinely excited about",
                                "Still going deep on ML through two active projects, coursework, and a lot of personal reading and tinkering",
                                "With everything happening at once, I feel more motivated than ever to keep exploring and building",
                                "And very excited for my first real Vancouver summer ☀️",
                            ],
                        },
                        {
                            year: "Looking Ahead into 2026...",
                            title: "",
                            bullets: [
                                "Getting into machine learning and setting bigger goals for where I want to go",
                                "Excited to keep growing as a developer, especially where tech, science, and design all meet",
                            ],
                        },
                        {
                            year: "2025-2026 School Year",
                            title: "Leadership & Growth in Development",
                            bullets: [
                                "Started as a frontend developer on UBC MINT's MOSS project",
                                "Got promoted to frontend team lead on MOSS!",
                                "Joined UBC GIS and UBC Startups as a developer, building out their websites",
                                "Threw myself into extracurriculars, met a lot of great people, and kept pushing my skills",
                            ],
                        },
                        {
                            year: "Summer 2025",
                            title: "Growing Beyond the Classroom",
                            bullets: [
                                "Started building skills outside of class through personal projects, online learning, and diving into design and web dev",
                                "Looked for opportunities to actually apply what I was learning, in research, internships, and team projects that felt meaningful",
                            ],
                        },
                        {
                            year: "2024-2025",
                            title: "Hackathons, Team Projects, & Frontend Exploration",
                            bullets: [
                                "Did my first hackathon",
                                "Got curious about frontend and started exploring it through side projects",
                                "Started paying attention to how design and storytelling shape the way people use tools",
                            ],
                        },
                        {
                            year: "2023-2024",
                            title: "First University Projects & Involvement",
                            bullets: [
                                "Built my first data model",
                                "Built my first full solo Java application",
                                "Started volunteering at club hackathons",
                                "Started finding ways to mix science and software in both coursework and personal projects",
                            ],
                        },
                        {
                            year: "2023",
                            title: "Moved to Vancouver, BC to start as a Faculty of Science student at UBC",
                            bullets: [],
                        },
                        {
                            year: "2019",
                            title: "Started High school & took first tech class",
                            bullets: [
                                "Discovered coding",
                                "Fell in love with logic and problem-solving",
                            ],
                        },

                    ].map((event, index) => {
                        const isExpanded = expandedIndex === index;
                        const hasBullets = event.bullets.length > 0;
                        return (
                            <div key={index} className="timeline-item" style={{ animationDelay: `${index * 0.15}s` }}>
                                <div className="timeline-marker">|</div>
                                <div
                                    className={`timeline-info ${hasBullets ? 'timeline-info-clickable' : ''}`}
                                    onClick={() => hasBullets && toggleExpand(index)}
                                >
                                    <span className="timeline-year">{event.year}</span>
                                    <h4 className="timeline-title">{event.title}</h4>
                                    {hasBullets && (
                                        <div className={`timeline-chevron ${isExpanded ? 'timeline-chevron-open' : ''}`}>
                                            <FiChevronDown />
                                        </div>
                                    )}
                                    <div className={`timeline-bullets-wrapper ${isExpanded ? 'timeline-bullets-open' : ''}`}>
                                        <ul className="timeline-bullets">
                                            {event.bullets.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


        </div>

    );
}

export default About;
