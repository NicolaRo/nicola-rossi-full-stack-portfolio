//Importo i componenti funzionali
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CvTools from '../components/CvTools';

//Importo le immagini
import nicolaCoding from '../assets/images/CV-img/Nicola-coding.jpg';
import codeBackground from '../assets/images/CV-img/code-background.jpg';
import macBookAirMockup from '../assets/images/CV-img/MacBook-air-S2I-Mockup.gif';
import s2IextendedLogo from '../assets/images/CV-img/Logo_Start2Impact.webp';

function Contact() {
    return (
      <>
      <Navbar />
              <div>
                <h1>Pagina CV</h1>
                <section class="wrap-education-hero">
          <div class="CV-Page-title">
            <h1>Master degree</h1>
            <div class= "page-header">
              <div class="hero-img-container">
                <img className="hero-img" src={codeBackground} alt="background image showing code"/>
                <img className="nicola-coding-img" src={nicolaCoding} alt="Nicola working at his pc"/>
              </div>
            </div>
          </div>
        </section>
        <section class="CV-hero-master">
          <h3> Full-Stack Development</h3>
          <div class="wrap-master-gif">
            <div class="start2Impact-container">
              <h3 class="institute-title">Institute:</h3>
              {/* <img src="./img/CV-img/Logo_Start2Impact.png"  */}
              {/* alt="Logo_Start2Impact" 
              class="hero-logo-master"> */}
              <img className="logo-s2i-extended" src={s2IextendedLogo} alt="logo Start 2 Impact"/>
              <h2>Start 2 Impact</h2> 
            </div>
            <div class="macbook-mockup">
              <img className="macbook-mockup" src={macBookAirMockup} alt="macbook air displaying Start 2 Impact full stack development course"/>
            </div>
            <div class="Masters-description">
              <p><strong>Skills I've learned</strong></p>
              <ul>
                <li>AI Prompting</li>
                <li>Web Development</li>
                <li>Frontend development</li>
                <li>Backend development</li>
              </ul>
            </div>
          </div>
          <a class="btn-master" href="https://start2impact.pro.typeform.com/to/xuE0ijXb?typeform-source=www.start2impact.it#brochure=full-stack&source=sito-web" target="_blank">Go to Master's page</a>   
        </section>
      </div>
      <CvTools/>
      <Footer />
      </>
    );
  }
  
  export default Contact;