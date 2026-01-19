//Import dei bottoni
import HomeButtons from '../components/HomeButtons';

//Import dei componenti
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';

/* //Import dell'immagine di profilo
import profilepicture from '../assets/images/home-img/Foto-Portfolio02_2024.png'; */


//Creo la funzione Home che conterrà tutto il contenuto della pagina
function Home () {
    //La funzione "ritorna":
    return (
        <>
        <Navbar/>
        { /*la sezione bio in cui sta l'immagine profilo il titolo e il paragrafo */ }
        <section className="portfolio-bio">
            <h1 className="bio-title">
                I'm Nicola
            </h1>
            <img className="profile-picture" src="/images/home-img/fotoprofilo.png" alt="Nicola's picture black & white"/>
            <div className="bio-text">
                <p>I am a motivated and detail-oriented developer with a strong background in Digital Graphic Design and a foundation in psychology.</p>
                <p>After completing my Master’s degree in Digital Graphic Design in 2024, I further strengthened my expertise in the digital field by pursuing an additional Master’s degree in Full Stack Development.</p>
                <p>I develop today thinking about tomorrow's scalability and maintainability, with a keen eye on sustainability and User Experience.</p>
            </div>
            
        </section>

        <div className='home-buttons-container'>
            {/*Qui in fondo inserisco il componente dei bottoni della home ed il Footer */}
            <HomeButtons/>
            
        </div>
        <Footer />
        </>
    );
}


export default Home;