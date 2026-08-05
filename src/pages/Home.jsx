
//Import components
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import CvTools from '../components/CvTools.jsx';
import Contact from './Contact.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import {projects} from '../data/projectData.js';

import useFadeInOnScroll from '../hooks/useFaInOnScroll.js';

//Import profile picture
import ProfilePicture from '../assets/fotoprofilo.png';


function Home () {
    const [aboutRef, aboutVisible] = useFadeInOnScroll();
    const [stackRef, stackVisible] = useFadeInOnScroll();
    const [projectsRef, projectsVisible] = useFadeInOnScroll();
    const [contactRef, contactVisible] = useFadeInOnScroll();
    return (
        <>
        <Navbar/>

        <section className="title-container">
            
            <div className="title-subtitle-pp">
                <h1 className="text-h1">Nicola Rossi</h1>
                <h2 className="text-h2">Full Stack Developer</h2>
                <img
                    className="profile-picture" 
                    src={ProfilePicture} 
                    alt="Nicola's picture black & white"
                />
            </div>
        
        </section>
            
        <section 
            id="about"
            ref={aboutRef}
            className={`fade-in-section} ${aboutVisible ? 'is-visible' : ''}`} >
                <div className="bio-text">
                    <p>I develop digital products designed to solve real-world problems through thoughtful engineering.</p>
                    <p>From AI-driven assistants and autonomous workflows to scalable full stack applications, I focus on creating software that is intuitive, maintainable, and built with purpose.</p>
                    <p>Every project is an opportunity to refine, improve, and deliver lasting value.</p>
                    <p>Every release is a foundation for the next.</p>
                </div>

        </section>
        
        <section 
            id="stack"
            ref={stackRef}
            className={`fade-in-section} ${stackVisible ? 'is-visible' : ''}`} >
                <CvTools/>
            </section>

        <section 
            id="projects"
            ref={projectsRef}
            className={`fade-in-section} ${projectsVisible ? 'is-visible' : ''}`} >
                <div className="project-cards">
                    {projects.map((project) => (
                        <ProjectCard 
                            key={project.id} 
                            project={project}
                        />
                    ))}
                </div>
        </section>
        
        <section 
            id="contact"
            ref={contactRef}
            className={`fade-in-section} ${contactVisible ? 'is-visible' : ''}`}>
            <Contact />
        </section>

        <Footer />
        </>
    );
}


export default Home;