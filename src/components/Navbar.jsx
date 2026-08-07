//Import useState to handle open/close state
import { useState, useEffect } from "react";

//Import items (the buttons) of the Navbar
import { navigation } from "../data/navigationData";

function Navbar() {
  //STATE MANAEMENT
  //Checks if the menu mobile is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  //Checks which section is within the viewport to color the navbar corresponding button
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) =>{
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        },
        { threshold: 0,
          rootMargin: "-40% 0px -40% 0px"
        }
    );
    navigation.forEach((item) => {
        const section = document.getElementById(item.id);
        if(section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  console.log("Sezione attiva:", activeSection);

  //Function to open/close the burger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      
      <div className="navigation-container">
      <img
        className="portfolio-logo"
        src="/images/navbar-img/logoblackwhite.png"
        alt="Logo Nico digital design"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
        {/*HAMBURGER ICON (only mobile) */}
      <label htmlFor="menu-btn" className="menu-icon" onClick={toggleMenu}>
        <span className={`nav-icon ${isMenuOpen ? "active" : ""}`}></span>
      </label>

      {/*MENU NAVIGATION */}
        <nav className={`menu ${isMenuOpen ? "menu-open" : ""}`}>
          {/*map generates from const navigation buttons in the navbar and set onClick smooth scroll to the section */}
          <div className="navbar-buttons-container">
            {navigation.map((item) => (
              <button
              className={`navbar-button ${activeSection === item.id ? "nav-active" : ""}`}
                key={item.id}
                onClick={() =>
                  document
                    .getElementById(item.id)
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                {item.text}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
