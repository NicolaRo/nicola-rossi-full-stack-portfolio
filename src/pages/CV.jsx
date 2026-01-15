//Importo i componenti funzionali
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CvTools from '../components/CvTools';
import ProjectCard from '../components/ProjectCard';

//Importo i dati per le cards e per renderizzare poi le pagine dei progetti
import projectsData from '../data/projectsData';

//Importo le immagini
import nicolaCoding from '../assets/images/CV-img/Nicola-coding.jpg';
import macBookAirMockup from '../assets/images/CV-img/MacBook-air-S2I-Mockup.gif';
import s2IextendedLogo from '../assets/images/CV-img/Logo_Start2Impact.webp';
import EngineerCodingGif from '../assets/images/CV-img/Coding-Software-Engineer_GIF.gif';
function CV() {
  console.log("projectsData:", projectsData);
    return (
      <>
      <Navbar />
      <div className="cv-page">
        <section className="wrap-education-hero">
          <div className="CV-Page-title">
            <h1>Master degree</h1>
            <div className="hero-img-container">
                <img 
                  className="nicola-coding-img" 
                  src={nicolaCoding} 
                  alt="Nicola working at his pc"
                />
              </div>
          </div>
        </section><h1> Full-Stack Development</h1>
        <section className="CV-hero-master">
          
          <div className="wrap-master-gif">
            <div className="start2Impact-container">
              <h1 className="institute-title">Institute:</h1>
              <img 
                className="logo-s2i-extended" 
                src={s2IextendedLogo} 
                alt="logo Start 2 Impact"
              />
            </div>
            <img className="macbook-mockup" src={macBookAirMockup} alt="macbook air displaying Start 2 Impact full stack development course"/>
            <div className="Masters-description">
              <h2 className="skill-list-title">Skills I've learned</h2>
              <ul className="skill-list">
                <li>AI Prompting</li>
                <li>Web Development</li>
                <li>Frontend development</li>
                <li>Backend development</li>
              </ul>
            </div>
          </div>
          <a className="btn-master" href="https://start2impact.pro.typeform.com/to/xuE0ijXb?typeform-source=www.start2impact.it#brochure=full-stack&source=sito-web" target="_blank">Go to Master's page</a>   
        </section>
        <CvTools/>
      </div>
      <h3 className='slider-title'>
          My Projects
        </h3>
      <div className="card-slider">
        
        <img className="sliders-picture"
        src={EngineerCodingGif}
        alt="animation of an Engineer pretending to code"/>
        <div className="projects-cards">
        {projectsData.map((project) => (
          <ProjectCard
          key={project.id}
          project={project}
          />
        ))}
      </div>
      </div>

      <Footer />
      </>
    );
  }
  
  export default CV;