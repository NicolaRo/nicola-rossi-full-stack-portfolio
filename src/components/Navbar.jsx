//Importo useState per gestire lo stato aperto/chiuso del menu
import {useState} from 'react';

//importo il logo
import logo from '../assets/images/home-img/Logo_Black-White.png';

//Importo hook di React useNavigate per consentire al logo di navigare alla Home
import {useNavigate} from 'react-router-dom';

//Importo i bottoni che ho creato in componente separato
import NavButtons from './NavButtons';

//Imposto la funzione in cui vive il componente
function Navbar () {

    //STATE MANAEMENT
    //Questo state controlla se il menu mobile è aperto o chiuso
    //Imposto lo state false=chiuso (default)
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Creola funzione navigate con hook useNavigate per consentire il routing del logo alla Home
    const navigate = useNavigate ()

    //Funzione per aprire/chiudere il menu quando clicco sul burger
    //inverte lo stato da false (se chiudo di default) ad open e viceversa
    const toggleMenu =() => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const closeMenu = () => {
        setIsMenuOpen(false);
    }
    //La funzione Navbar ritornerà quello che è il suo contenuto
    return (
        <header className="header">

        {/*Inserisco il logo cliccabile che manderà alla Home se cliccato */ }
            <img 
                className="logo-img" 
                src={logo} alt="Logo Nico digital design" 
                onClick={() => navigate ('/')}
            />

            {/*HAMBURGER ICON (solo mobile) */}
            <label
                htmlFor="menu-btn"
                className="menu-icon"
                onClick={toggleMenu}
            >
                {/*La classe 'active' viene aggiunta quando isMenuOpen è true ed attiva l'animazione in X da CSS */}
                <span className={`nav-icon ${isMenuOpen ? 'active' : ''}`}></span>
            </label>

            {/*MENU NAVIGATION */}
            <nav className ={`menu ${isMenuOpen ? 'menu-open': ''}`}>
                {/* Inserisco qua il componente NavButton che include il routing per la navigazione oltre agli states che attivano le caratteristiche del componente*/ }
                <NavButtons
                isMenuOpen={isMenuOpen}
                closeMenu={closeMenu}/>
            </nav>
        </header>
    );
}

export default Navbar;