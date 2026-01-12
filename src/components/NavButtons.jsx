import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
            <li>
              <button onClick={() => handleNavigate("/depyl")}>
                Depyl
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/greenEarth")}>
                GreenEarth
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/ecoAware")}>
                EcoAware
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/theCounterTop")}>
                The Counter Top
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/owly")}>
                Owly
              </button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/veggieBook")}>
                VeggieBook
              </button>
            </li>
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