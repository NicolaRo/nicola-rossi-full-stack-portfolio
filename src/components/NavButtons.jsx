// Importo useNavigate per la navigazione
import { useNavigate } from "react-router-dom";

// Importo useState per gestire gli stati
import { useState } from "react";

function NavButtons({closeMenu}) {
  
  const navigate = useNavigate();

  // Stato dropdown progetti (desktop)
  const [showProjects, setShowProjects] = useState(false);

  //Funzione per navigare alla pagina progetto e richiudere il menu 
  const handleNavigate = (path) => {
    navigate(path);
    closeMenu();
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
        <button onClick={() => handleNavigate("/cv")}>
          My Developer CV
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
