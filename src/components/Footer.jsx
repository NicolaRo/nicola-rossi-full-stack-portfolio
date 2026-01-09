// Importo i loghi dei social che voglio linkare
//Qui non serve useNavigate in quanto i link saranno esterni direttamente dentro le imagini
import GitHubLogo from '../assets/images/footer-img/Github-Logo-Black.png';
import LinkedinLogo from '../assets/images/footer-img/linkedin-icon-black.png';


//Importo la componente Link dalla libreria di routing da react-router-dom
import {Link} from 'react-router-dom'; 

function Footer () {
    return (
        <>
        <div className="footer">
        <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/cv">CV</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
        <div className="footer-icon-container">
        
            <a href="https://github.com/NicolaRo" target="_blank" rel="noopener noreferrer">
                <img 
                className="social-icon" 
                src={GitHubLogo}
                alt="GitHub Logo black"
                />
            </a>

            <a href="https://www.linkedin.com/in/nicola-rossi-3365a768/" target="_blank" rel="noopener noreferrer">
                <img 
                className="social-icon" 
                src={LinkedinLogo}
                alt="Linkedin Logo black"
                />
            </a>
            
        </div>
        <p className="footer-text">Designed and developed by Rossi Nicola® </p>
        </div>
        </>
    )
}

export default Footer;