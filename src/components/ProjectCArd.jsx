
//Importo le props di React per la navigazione
import {useNavigate} from 'react-router-dom';

function ProjectCard ({project}) {
  
  const navigate =useNavigate();  
  return (
        <div className="project-card">
          <img className="project-card-logo"
          src={project.logo}
          alt={`${project.title} logo`}
          />
          <h3 className="project-card-title">
            {project.title}
          </h3>
          <div className="project-card-tags">
            {(project.tags || []).map((tag,index) => (
              <span key={index} 
              className={`project-card__tag project-card__tag--${tag}`}>
                {tag}
              </span>
            ))}
          </div>
          <p className="project-card-description">{project.description}</p>
          <button className="project-card-button"
            onClick={()=> navigate(`/progetto/${project.id}`)}> 
            Go to project 
          </button>
        </div>
    );
}

export default ProjectCard;