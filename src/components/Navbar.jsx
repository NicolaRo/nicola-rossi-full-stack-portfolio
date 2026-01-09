//importo il logo
import logo from '../assets/images/home-img/Logo_Black-White.png';

//Importo hook di React useNavigate per consentire al logo di navigare alla Home
import {useNavigate} from 'react-router-dom';

//Importo i bottoni che ho creato in componente separato
import NavButtons from './NavButtons';

//Imposto la funzione in cui vive il componente
function Navbar () {

    // Creola funzione navigate con hook useNavigate per consentire il routing del logo alla Home
    const navigate = useNavigate ()
    //La funzione Navbar ritornerà quello che è il suo contenuto
    return (
        <>
        {/*Inserisco il logo che manderà alla Home se cliccato */ }
        <div className="navbar">
            <img 
                className="portfolio-logo" 
                src={logo} alt="Logo Nico digital design" 
                onClick={() => navigate ('/')}
            />

        </div>

        <div className="Navbar-buttons-container">
            {/* Inserisco qua il componente NavButton che include il routing per la navigazione oltre agli states che attivano le caratteristiche del componente*/ }
            <NavButtons />
        </div>

        </>

    )
}

export default Navbar;