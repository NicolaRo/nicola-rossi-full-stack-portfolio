
function ProjectCard ({project}) {
  
  return (
    <div className="project-card">
      <img 
        className="project-card-logo"
        src={`/logos/${project.logo}`}
        alt={`${project.title} logo`}
      />
      <h3 className="project-card-title">
        {project.title}
      </h3>
      <div className="project-card-tags">
        {(project.tags || []).map((tag, index) => (
          <span 
            key={index} 
            className="single-card-tag"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="project-card-description">
        {project.bio}
      </p>
      {/*Button to the repository*/}
      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-button"
        >GitHub</a>
      ) : (
        <span className="project-card-button project-card-button--disabled">
          GitHub
        </span>
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
  );
}

export default ProjectCard;