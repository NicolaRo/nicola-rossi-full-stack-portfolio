//Importo i componenti funzionali
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CvTools from '../components/CvTools';

//Importo le immagini
import nicolaCoding from '../assets/images/CV-img/Nicola-coding.jpg';
import macBookAirMockup from '../assets/images/CV-img/MacBook-air-S2I-Mockup.gif';
import s2IextendedLogo from '../assets/images/CV-img/Logo_Start2Impact.webp';

function Contact() {
    return (
      <>
      <Navbar />
      <div className="cv-page">
        <section class="wrap-education-hero">
          <div class="CV-Page-title">
            <h1>Master degree</h1>
            <div class= "page-header">
              <div class="hero-img-container">
                {/* <img className="hero-img" src={codeBackground} alt="background image showing code"/> */}
                <img className="nicola-coding-img" src={nicolaCoding} alt="Nicola working at his pc"/>
              </div>
            </div>
          </div>
        </section><h1> Full-Stack Development</h1>
        <section class="CV-hero-master">
          
          <div class="wrap-master-gif">
            <div class="start2Impact-container">
              <h1 class="institute-title">Institute:</h1>
              <img className="logo-s2i-extended" src={s2IextendedLogo} alt="logo Start 2 Impact"/>
            </div>
            <div class="macbook-mockup">
              <img className="macbook-mockup" src={macBookAirMockup} alt="macbook air displaying Start 2 Impact full stack development course"/>
            <div class="Masters-description">
              <h2 className="skill-list-title">Skills I've learned</h2>
              <ul className="skill-list">
                <li>AI Prompting</li>
                <li>Web Development</li>
                <li>Frontend development</li>
                <li>Backend development</li>
              </ul>
            </div>
            </div>
            
          </div>
          <a class="btn-master" href="https://start2impact.pro.typeform.com/to/xuE0ijXb?typeform-source=www.start2impact.it#brochure=full-stack&source=sito-web" target="_blank">Go to Master's page</a>   
        </section>
        <CvTools/>
      </div>
      
      <Footer />
      </>
    );
  }
  
  export default Contact;