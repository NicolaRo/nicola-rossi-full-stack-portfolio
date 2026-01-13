//Importo le immagini
import TheCounterTopPreview from "../assets/images/Projects-img/TheCounterTop-preview.gif";
import TheCounterTopLogo from "../assets/images/Projects-img/CounterTop-logo.png";
import GitHubLogo from '../assets/images/footer-img/Github-Logo-Black.png';

//Importo i componenti

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function TheCounterTop () {
    
    return (
        
        <>
        <Navbar />

        <div>
            <h1>The Counter Top</h1>
            <img className="project-desc-logo" src={TheCounterTopLogo} alt="The Counter Top logo" />
            <h3>Project Brief</h3>
            <h4>A lightweight counter application with session-based tracking</h4>

            <p>Counter-Top is a simple web application designed to increment, decrement, and track numerical values through a clean and responsive user interface.</p>
            <p>The project focuses on clarity, usability, and lightweight client-side logic, intentionally avoiding persistent storage to keep the implementation minimal and easy to reason about.</p>
            <ul>
                <h4>Functional Overview</h4>
                <li>Users can increment and decrement a counter using dedicated controls.</li>
                <li>The counter can be reset at any time.</li>
                <li>Current values can be recorded and displayed within the active session.</li>
                <li>Recorded entries are cleared on page refresh by design, ensuring a lightweight and stateless experience.</li>
            </ul>
            <ul>
                <h4>Technical Stack</h4>
                <li>HTML5 for semantic and accessible markup</li>
                <li>SCSS for modular and reusable styling</li>
                <li>Vanilla JavaScript for client-side logic without external frameworks</li>
                <li>Responsive layout built with a mobile-first approach</li>
                <li>Flexbox and CSS gradients for layout structure and visual consistency</li>
            </ul>
        </div>
        <div className="project-preview-container">
            <img className="the-counter-top-preview" src={TheCounterTopPreview} alt="The Counter Top app preview"/>
        </div>

        <div className="github-bt-container">
            <a className="github-project-button"
                href="https://github.com/NicolaRo/Counter" 
                target="_blank" 
                rel="noopener noreferrer">
                <img 
                    className="social-icon" 
                    src={GitHubLogo}
                    alt="GitHub Logo black"
                />
                </a>
        </div>

        <Footer/>
        </>

        
    );
}

export default TheCounterTop;