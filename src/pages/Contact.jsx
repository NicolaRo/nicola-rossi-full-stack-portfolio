//Importo gli stati di React per gestire l'invio dal form
import {useState} from 'react';

//Importo i componenti
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';



function Contact() {

    const [formStatus, setFormStatus] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const name = e.target.name.value.trim();
      const email = e.target.email.value.trim();
      const message = e.target.message.value.trim();
  
      // Validazioni
      if (name.length < 2) {
        alert("Name lenght must be at least 2 digits.");
        return;
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert("Please provide a valid e-mail address.");
        return;
      }
  
      if (message.length < 10) {
        alert("The message must be of minimum 10 digits.");
        return;
      }
  
      // Invia con EmailJS
      setFormStatus('sending');
  
      window.emailjs.sendForm(
        'service_a2dm5gk',      //Service ID
        'template_0zzzi64',      //Template ID
        e.target
      )
      .then(() => {
        alert('Message sent!');
        e.target.reset();
        setFormStatus('success');
      })
      .catch((error) => {
        alert("Error, try again.");
        console.error('EmailJS Error:', error);
        setFormStatus('error');
      });
    };

  return (
    <>
      <Navbar/>
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-page">
          <img className="contct-me-hero-img"
            src="/images/contact-img/illustration.png"
            alt="Illustration account is using the contact form"
          />
        <div className="container-form">
        <div className="form-text">
          <p>Fill out the form below to send me a message. I will get back to you as soon as possible.</p>
          <form id="contact-form" onSubmit={handleSubmit}>
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
            <button type="submit" disabled={formStatus === 'sending'}>
                  {formStatus === 'sending' ? 'Sending message...' : 'Send message'}
                </button>
              {/* <button type="submit">Send message</button> */}
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
            <img className="logo-whatsapp" 
            src="/images/contact-img/whatsapp.png" 
            alt="WhatsApp logo"
            style={{ height: '24px', textDecoration: 'none' }}
          />
        </a>
      </div>
      </div>
      </div>
      
      
      <Footer/>
    </>
  );
}

export default Contact;