import './Contact.css';
import resume from '../assets/resume.pdf';


function Contact() {
    return (
        <div className='main-container'>
            <p className="title">Let's Connect!</p>
            <p className="sub">Whether you're reaching out for a project, internship, or just to chat—I'd love to hear from you!</p>
            <ul className='sublist'>
                <li>Based in Vancouver, BC | Toronto, ON</li>
                <li>Currently open to internships & collaborative projects</li>
            </ul>
            <div className="contactlist reveal">
                <a href="mailto:madilynnwright@icloud.com" className="contact-item">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">madilynnwright@icloud.com</span>
                </a>
                <a href="https://www.linkedin.com/in/madilynn-wright/" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <span className="contact-label">LinkedIn</span>
                    <span className="contact-value">linkedin.com/in/madilynn-wright</span>
                </a>
                <a href="https://github.com/MaddieWright" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <span className="contact-label">GitHub</span>
                    <span className="contact-value">github.com/MaddieWright</span>
                </a>
                <a href={resume} target="_blank" rel="noopener noreferrer" className="contact-item">
                    <span className="contact-label">Resume</span>
                    <span className="contact-value">View PDF ↗</span>
                </a>
            </div>
        </div>
    );
}

export default Contact;
