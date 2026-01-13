//Importo le immagini
import ContactPicture from "../assets/images/Contact-Me-img/Get-in-touch.png";
import WhatsappLogo from "../assets/images/Contact-Me-img/whatsapp.png";
//Importo i componenti
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Navbar/>
      <div className="contact-page">
        <h1>Contact Me</h1>
        <img 
          className="contact-me-hero-img"
          src={ContactPicture} 
          alt="Illustration account is using the contact form"
        />
      </div>
      
      <div className="container-form">
        <div className="form-text">
          <p>Fill out the form below to send me a message. I will get back to you as soon as possible.</p>
          <form id="contact-form">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required 
                minLength="2" 
                placeholder="Your name"
              />
            </div>
            
            <div className="field">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                placeholder="you@example.com"
              />
            </div>
            
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea 
                name="message" 
                id="message" 
                required 
                minLength="10" 
                placeholder="Write your message..."
              ></textarea>
            </div>
            
            <div className="submit-btn-container">
              <button type="submit">Send message</button>
            </div>
            
          </form>
          <p>Or for a quicker response...</p>
        </div> 
        <div className="whatsapp-btn-container">
        <a className="whatsapp-btn"
          href="https://wa.me/393459778518" 
          target="_blank"
          rel="noopener noreferrer"
        > 
          Start a chat with me 
          <img 
            className="logo-whatsapp" 
            src={WhatsappLogo} 
            alt="WhatsApp logo"
            style={{ height: '24px', textDecoration: 'none' }}
          />
        </a>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;