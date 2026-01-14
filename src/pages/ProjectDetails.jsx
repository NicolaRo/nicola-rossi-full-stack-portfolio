//Importo hooks di React per la navigazione
import {useNavigate, useParams} from "react-router-dom";



//Importo la pagina data per reperire le informazioni
import projectsData from "../data/projectsData";




function ProjectDetails () {
    const {id} = useParams();
    const project = projectsData.find(proj => proj.id === id);
    const navigate = useNavigate();
    
    if (!project) {
        return (<p>"Project not found"</p>);
        }
    return (
        <div className="pj-details-container">
            <div className="pj-header">
                <h1 className="project-title"> {project.title}</h1>
                <div className="pj-logo">
                    <img className="pj-logo" src={project.logo} alt={`${project.title} Logo`}></img>
                </div>
                <div className="pj-description-container">
                    <div className="pj-tags">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="pj-tag">{tag}</span>
                        ))}
                    </div>
                    <div className="pj-description-text">
                        <p> {project.detailDescription}</p>
                    </div>
                </div>
                    <img className="pj-preview" src={project.preview} alt="Preview"/>
            </div>
            <button className="pj-btn-next" 
            onClick={() => navigate('/pages/project/'+project.id)}>Next Project</button>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
        
    );
}

export default ProjectDetails;