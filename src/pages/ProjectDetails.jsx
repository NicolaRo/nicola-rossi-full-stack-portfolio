//Importo hooks di React per la navigazione
import {useNavigate, useParams} from "react-router-dom";

//Importo i componenti
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';


//Importo la pagina data per reperire le informazioni
import projectsData from "../data/projectsData";

//Importo la pagina di stile per consentire l'applicazione dei colori dei tag
import '../styles/pages/project-page.scss';




function ProjectDetails () {
    const {id} = useParams();
    const project = projectsData.find(proj => proj.id === id);
    const navigate = useNavigate();
    
    if (!project) {
        return (<p>"Project not found"</p>);
        }
    return (
        <>
        <Navbar/>
        <div className="pj-details-container">
            <div className="pj-header">
                <h1 className="project-title"> {project.title}</h1>
                <img className="pj-logo" src={project.logo} alt={`${project.title} Logo`}></img>
                <div className="pj-description-container">
                    <div className="pj-tags">
                        {project.tags.map((tag, index) => (
                        <span key={index} className={`pj-tag pj-tag--${tag}`}>
                            {tag}
                            </span>
                    ))}
                    </div>
                    <div className="pj-description-text">
                        <p> {project.detailDescription}</p>
                    </div>
                </div>
                {project.youtubeId ? (
  <div className="pj-video-wrapper">
    <iframe
      src={`https://www.youtube.com/embed/${project.youtubeId}`}
      title={`${project.title} demo`}
      allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  </div>
) : (
  <img className="pj-preview" src={project.preview} alt="Preview"/>
)}
            </div>
            <button onClick={() => navigate(-1)}>Back</button>
            <button className="pj-btn-next">
            {project.gitHub && (
                    <a 
                    href={project.gitHub} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-button"
                    >
                    View on GitHub
                    </a>
                )}
            </button>
        </div>  
        <Footer/>
        </>
        
    );
}

export default ProjectDetails;