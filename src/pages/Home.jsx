
//Import components
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import CvTools from '../components/CvTools.jsx';
import Contact from './Contact.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import {projects} from '../data/projectData.js';


//Import profile picture
import ProfilePicture from '../assets/fotoprofilo.png';


function Home () {
    return (
        <>
        <Navbar/>
        <section className="portfolio-bio">
            <h1 className="text-h1">Nicola Rossi</h1>
            <h2 className="text-h2">Full Stack Developer</h2>
            <img
                className="profile-picture" 
                src={ProfilePicture} 
                alt="Nicola's picture black & white"
            />
            <div className="bio-text">
                <p>I develop digital products designed to solve real-world problems through thoughtful engineering.</p>
                <p>From AI-driven assistants and autonomous workflows to scalable full stack applications, I focus on creating software that is intuitive, maintainable, and built with purpose.</p>
                <p>Every project is an opportunity to refine, improve, and deliver lasting value.</p>
                <p>Every release is a foundation for the next.</p>
            </div>
        </section>
        
        <CvTools/>

        <section className="projects-section">
            {projects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    project={project}
                />
            ))}
        </section>
        
        <Contact />
        <Footer />
        </>
    );
}


export default Home;