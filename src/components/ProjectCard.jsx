
function ProjectCard ({project}) {
  
  return (
    
    <>
    <div className="project-card">
      {project.logo ? (
        <img 
        className="project-card-logo"
        src={`/logos/${project.logo}`}
        alt={`${project.title} logo`}
      />
    ) : (
        <div className="project-card-logo-placeholder">
          {project.title.charAt(0)}
        </div>
      )}
      
      <h3 className="text-h3">
        {project.title}
      </h3>
      <div className="project-card-tags">
        {(project.tags || []).map((tag, index) => (
          <p 
            key={index} 
            className="text-tag"
          >
            {tag}
          </p>
        ))}
      </div>
      <p className="text-body">
        {project.bio}
      </p>
      {/*Button to the repository*/}
      <div className="card-btn-container">
      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-button"
        >GitHub</a>
      ) : (
        <p className="project-card-button project-card-button--disabled">
          GitHub
        </p>
      )}

      {/*Demo button*/}
      {project.demo?.type ? (
        <a
          href={project.demo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-button"
        >
          {project.demo.type === "youtube" ? "Watch video" : "Live demo"}
        </a>
      ) : ( 
        <span className= "project-card-button project-card-button--disabled">
          Demo
        </span>
      )}
      </div>
      
    </div>
    </>
    
  );
  
}
   
    

export default ProjectCard;