//Importo le immagini
    //import ProjectPreview from "../assets/images/Projects-img/Name-preview.png";
    //import ProjectLogo from "..//assets/imageg/Projects-img/Name-logo.png"
    import GitHubLogo from '../assets/images/footer-img/Github-Logo-Black.png';
//Importo i componenti
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PlantyOfFood () {
    return (

        <>
        <Navbar/>

        <div>
            <h1>Planty of Food</h1>
            {/* Logo here */}
            <h3>Project Brief</h3>
            <h4>🚧 Work in progress 🚧</h4>
        </div>
        <div className="github-bt-container">
            <a className="github-project-button"
                href="https://github.com/NicolaRo" 
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

export default PlantyOfFood;