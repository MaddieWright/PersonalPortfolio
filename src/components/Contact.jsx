import './Contact.css';

function Contact() {
    return (
        <div className='main-container'>
            <p className="title">Let's Connect!</p>
            <p className="sub">Whether you’re reaching out for a project, internship, or just to chat—I’d love to hear from you!</p>
            <ul className='sublist'>
                <li>Based in Vancouver, BC | Toronto, ON</li>
                <li>Currently open to internships & collaborative projects</li>
            </ul>
            <div className="contactlist">
                <p className="email">Email: madilynnwright@icloud.com</p>
                <p className="linked">LinkedIn: <a href="https://www.linkedin.com/in/madilynn-wright/" target="_blank" rel="noopener noreferrer" className="contact-link"> www.linkedin.com/in/madilynn-wright</a></p>
                <p className="git">GitHub: <a href="https://github.com/MaddieWright" target="_blank" rel="noopener noreferrer" className="contact-link"> https://github.com/MaddieWright</a></p>
                <p className="resume"><a href="./src/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="contact-link">
                    Resume
                </a></p>
            </div>
        </div>
    );
}

export default Contact;