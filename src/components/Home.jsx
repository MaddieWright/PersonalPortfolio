import './Home.css';
import Projects from './Projects'
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className='main-container'>
                <p className='head'>Hi, I'm Madilynn Wright</p>
                <p className='sub-head'>Aspiring Developer | Studying Computer Science in CMS @ UBC</p>
                <p className='sub-head'>Driven by curiosity. Guided by values. Built with purpose.</p>

                <div className="button-group">
                    <Link to="/projects">
                        <button>Explore My Work</button>
                    </Link>
                    <Link to="/contact">
                        <button>Let's Connect</button>
                    </Link>
                </div>
            </div>
            <div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <About />
                <Projects />
                <br></br>
                <br></br>
                <Skills />
                <Contact />
                <br></br>
                <br></br>
            </div>
        </div>
    );
}

export default Home;