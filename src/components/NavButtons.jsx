// Importo useNavigate per la navigazione
import { useNavigate } from "react-router-dom";

// Importo useState per gestire gli stati
import { useState } from "react";

function NavButtons() {
  const navigate = useNavigate();

  // Stato burger menu (mobile)
  const [burgerOpen, setBurgerOpen] = useState(false);

  // Stato dropdown progetti (desktop)
  const [showProjects, setShowProjects] = useState(false);

  // Toggle burger menu
  const toggleBurger = () => {
    setBurgerOpen((prev) => !prev);
  };

  return (
    <nav className="navbar-container">
      {/* Burger menu (visibile solo su mobile via CSS) */}
      <button
        className="burger-icon"
        onClick={toggleBurger}
        aria-label="Toggle menu"
      />

      {/* Menu principale */}
      <ul className={`menu ${burgerOpen ? "open" : ""}`}>
        {/* BIO */}
        <li>
          <button onClick={() => navigate("/")}>
            I'm Nicola
          </button>
        </li>

        {/* CV + DROPDOWN */}
        <li
          className="has-dropdown"
          onMouseEnter={() => setShowProjects(true)}
          onMouseLeave={() => setShowProjects(false)}
        >
          <button onClick={() => navigate("/cv")}>
            My Developer CV
          </button>

          {/* Dropdown progetti (desktop hover) */}
          {showProjects && (
            <ul className="dropdown">
              <li><button onClick={() => navigate("/depyl")}>Depyl</button></li>
              <li><button onClick={() => navigate("/greenEarth")}>GreenEarth</button></li>
              <li><button onClick={() => navigate("/ecoAware")}>EcoAware</button></li>
              <li><button onClick={() => navigate("/theCounterTop")}>The Counter Top</button></li>
              <li><button onClick={() => navigate("/owly")}>Owly</button></li>
              <li><button onClick={() => navigate("/veggieBook")}>VeggieBook</button></li>
            </ul>
          )}
        </li>

        {/* CONTACT */}
        <li>
          <button onClick={() => navigate("/contact")}>
            Contact Me
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavButtons;
