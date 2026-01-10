//Importo hook 'useNavigate di react-router-dom
import { useNavigate } from 'react-router-dom';

//Importo le immagini contenute nei bottoni
import cvLogo from '../assets/images/home-img/cvLogo.png';
import contactLogo from '../assets/images/home-img/contactLogo.png';

//Imposto la funzione che consente ai bottoni di caricare le pagine desiderate
function HomeButtons () {
    //Salvo la funzione nella variabile per usare l'hook di React
    //useNavigate restituisce la funzione per spostarsi tra le pagine
    const navigate = useNavigate();
    return (
        <div className="home-buttons-container">
            <button className='cv-button' onClick={()=> navigate ("/cv")}>
                <img className='button-cv-icon' src={cvLogo} alt="Developer icon"/>
                My Developer Portfolio
            </button>

            <button className='contact-button' onClick={()=>navigate ("/contact")}>
                <img className='button-contact-icon' src={contactLogo} alt="Contact icon"/>
                Contact Me
            </button>
        </div>
    );
}

export default HomeButtons;