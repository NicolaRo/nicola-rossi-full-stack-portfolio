//Importo hook 'useNavigate di react-router-dom
import { useNavigate } from 'react-router-dom';

//Imposto la funzione che consente ai bottoni di caricare le pagine desiderate
function HomeButtons () {
    //Salvo la funzione nella variabile per usare l'hook di React
    //useNavigate restituisce la funzione per spostarsi tra le pagine
    const navigate = useNavigate();
    return (
        <div className="home-buttons-container">
            <button className='cv-button' onClick={()=> navigate ("/cv")}>
            <img className="button-cv-icon" src="/images/home-img/cvlogo.png" alt="Developer icon"/>
                My Developer Portfolio
            </button>

            <button className='contact-button' onClick={()=>navigate ("/contact")}>
            <img className="button-contact-icon" src="/images/home-img/contactlogo.png" alt="Contact icon"/>
                Contact Me
            </button>
        </div>
    );
}

export default HomeButtons;