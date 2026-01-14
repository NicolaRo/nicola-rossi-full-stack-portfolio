//Importo i componenti
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GitHubLogo from '../assets/images/footer-img/Github-Logo-Black.png';
//Importo le immagini
import depylLogo from '../assets/images/Projects-img/Depyl_Logo_Clear.png';
import depylPreview from '../assets/images/Projects-img/Depyl-macbook-preview.gif';

function Depyl () {

    return(
        <>
        <Navbar/>
        <div>
            <h1>Depyl</h1>
            <img className="project-logo" src={depylLogo} alt="Logo Depyl"/>
            <h3>Water filters</h3>
          <p>Build a Web Page that epresents the Brand.
          Craft a professional and engaging web page that showcases the essence of a company. Here are the key elements your page should include to stand out:</p>
          <ul> 
            <li>✍️ Company Name: Highlight the brand clearly and prominently.</li>
            <li>🎨 Company Logo: Create a simple yet eye-catching logo</li>
            <li>🧑‍🧑‍🧒‍🧒 Social Media Links: Add social icons and link them to general platforms (e.g., facebook.com, instagram.com).</li>
            <li>🎯 Mission Statement: Write a concise, impactful sentence that captures the company’s mission and vision.</li>
            <li>🧩 Background Aligned with Brand Values: Choose a background that visually reflects the company's identity and values</li>
          </ul>
          <img
            className="depyl-preview"
            src={depylPreview}
            alt="Macbook displaying Depyl landing page"
          />
        </div>
        <div className="github-bt-container">
            <a
              className="github-project-button"
              href="https://github.com/NicolaRo/depyl" 
              target="_blank" 
              rel="noopener noreferrer">
              <img 
                className="social-icon" 
                src={GitHubLogo}
                alt="GitHub Logo black"
              />
            </a>
          </div>
        <Footer />
        </>
        
    );
}

export default Depyl;