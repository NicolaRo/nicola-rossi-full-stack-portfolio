//Importo le immagini
import GreenEarthPreview from "../assets/images/Projects-img/GreenEarth-preview.gif";
import GreenEarthLogo from "../assets/images/Projects-img/GreenEarth-logo.png";
import GitHubLogo from '../assets/images/footer-img/Github-Logo-Black.png';
//Impoerto i componenti
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function GreenEarth () {

    return (
        <>
        <Navbar />
        <h1>GreenEarth</h1>
            <div>
                <img className="project-desc-logo" src={GreenEarthLogo} alt="GreenEarth logo" />
                <h3>Project Brief</h3>
                <p>The website had to reflect the values and identity of the GreenEarth brand and was structured around the following key sections:</p>
                <p>Here are the key elements your page should include to stand out:</p>
                <ul>
                    <li>A header with a logo</li>
                    <li>A hero section with a compelling background image</li>
                    <li>A footer with basic contact information</li>
                    <li>An "About Us" section that clearly introduces the Company</li>
                    <li>An "Our Projects" section showcasing three initiatives</li>
                </ul>
            </div>
        <div className="project-preview-container">
            <img
                className="greenearth-preview"
                src={GreenEarthPreview}
                alt="GreenEarth app preview"
            />
        </div>
        <div className="github-bt-container">
                <a
                    className="github-project-button"
                    href="https://github.com/NicolaRo/Green-Earth" 
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

export default GreenEarth;