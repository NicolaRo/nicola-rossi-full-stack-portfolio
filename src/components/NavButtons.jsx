//Importo gli hooks di React
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Importo il file con i dati progetto
import projectsData from "../data/projectsData";

function NavButtons({closeMenu}) {
  const navigate = useNavigate();
  
  // Stato dropdown progetti
  const [showProjects, setShowProjects] = useState(false);
  
  // Funzione per navigare e chiudere menu
  const handleNavigate = (path) => {
    navigate(path);
    closeMenu();
    setShowProjects(false); // Chiudi anche il dropdown
  };
  
  // Toggle dropdown progetti (per mobile)
  const toggleProjects = (e) => {
    e.stopPropagation(); // Previene la navigazione immediata
    setShowProjects(!showProjects);
  };

  return (
    <ul className="menu-list">
      {/* BIO */}
      <li>
        <button onClick={() => handleNavigate("/")}>
          I'm Nicola
        </button>
      </li>

      {/* CV + DROPDOWN */}
      <li
        className="has-dropdown"
        onMouseEnter={() => setShowProjects(true)}
        onMouseLeave={() => setShowProjects(false)}
      >
        {/* Su mobile: click per toggle dropdown, su desktop: naviga */}
        <button 
          onClick={(e) => {
            // Se il dropdown è chiuso, aprilo invece di navigare
            if (window.innerWidth < 768 && !showProjects) {
              toggleProjects(e);
            } else {
              handleNavigate("/cv");
            }
          }}
        >
          My Developer CV
          {/* Indicatore visivo per mobile */}
          <span style={{ marginLeft: '8px' }}>
            {showProjects ? '▲' : '▼'}
          </span>
        </button>

        {showProjects && (
          <ul className="dropdown">
            {projectsData.map((project) => (
              <li key={project.id}>
                <button onClick={() => handleNavigate(`/progetto/${project.id}`)}>
                  {project.title}
                </button>
              </li>
            ))}
            </ul>
        )}
            </li>
      {/* CONTACT */}
      <li>
        <button onClick={() => handleNavigate("/contact")}>
          Contact Me
        </button>
      </li>
    </ul>
  );
}

export default NavButtons;