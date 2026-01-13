//Import immagini
import EcoawarePreview from "../assets/images/Projects-img/EcoAware-preview.gif";
import EcoawareLogo from "../assets/images/Projects-img/EcoAware-logo.png"
import GitHubLogo from '../assets/images/footer-img/Github-Logo-Black.png';

//Importo i componenti
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function EcoAware () {

    return(
        <>
        <Navbar />
            <h1>Page EcoAware</h1>
                <div>
                    <img className="project-desc-logo" src={EcoawareLogo} alt="EcoAware logo"/>
                    <h3>Project Brief</h3>
                    <h4>Create a carbon emissions calculator</h4>
                    <p>An environmental non-profit organization, EcoAware, has commissioned the creation of an educational tool designed to raise awareness about individual carbon footprints.</p>
                    <p>The goal? To help users understand the environmental impact of their daily habits — and inspire smarter, greener choices. </p>
                    <p>The task was to develop a set of JavaScript functions that estimate carbon emissions based on key lifestyle inputs like energy consumption, transportation, and diet.</p>
                    <ul>
                        <h4>Technical Requirements:</h4>
                        <li>The JavaScript tool must include the following core functionalities, each encapsulated in clean, modular functions:</li>
                        <li>⚡ Energy Emissions Calculator
                            Accepts user input for electricity usage in kWh and returns total CO₂ emissions in kg.
                            
                            Formula: CO₂ = kWh × 0.233 kg
                            </li>
                        <li>Transportation Emissions Calculator
                            Takes the distance traveled by car in kilometers and calculates the equivalent CO₂ output in kg.
                            
                            Formula: CO₂ = km × 0.21 kg
                            </li>
                        <li>Total Emissions Calculator
                            Aggregates the values from energy and transport inputs to compute the user's total carbon footprint in kilograms.</li>
                    </ul>
                </div>
                <div className="project-preview-container">
                    <img className="ecoaware-preview" src={EcoawarePreview} alt="EcoAware app preview"/>
                </div>
                <div className="github-bt-container">
                    <a
                        className="github-project-button"
                        href="https://github.com/NicolaRo/EcoAware" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        <img 
                            className="social-icon" 
                            src={GitHubLogo}
                            alt="GitHub Logo black"
                        />
                    </a>
                </div>
            <Footer/>
        </>
    );
}

export default EcoAware;