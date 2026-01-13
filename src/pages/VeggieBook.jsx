//Importo le immagini
import VeggiBookPreview from "../assets/images/Projects-img/VeggieBook-preview.gif";
import VeggieBookLogo from "../assets/images/Projects-img/VeggieBook-logo.png";
import GitHubLogo from '../assets/images/footer-img/Github-Logo-Black.png';
//Importo i componenti
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function VeggieBook () {

    return (
        <>
        <Navbar />
        <div>
            <h1>VeggieBook</h1>
            <img className="project-desc-logo" src={VeggieBookLogo} alt="VeggieBook logo" />
            <h3>Project Brief</h3>
            <h4>Search and explore vegetarian recipes using the Spoonacular API</h4>
            <p>This project is a web application designed for users interested in discovering vegetarian recipes through a simple and intuitive interface.</p>
            <p>The application integrates with the Spoonacular Food API, leveraging query parameters to ensure that only vegetarian recipes are retrieved and displayed.</p>
            <ul>
                <h4>Functional Overview</h4>
                <li>Users can search for vegetarian recipes using a dedicated search bar</li>
                <li>Each search result displays essential information, including the recipe title and cover image</li>
                <li>Selecting a recipe navigates the user to a dedicated detail page with additional information</li>
                <li>The interface is designed to be simple, intuitive, and easy to navigate</li>
                <li>The application follows a clear and organized structure to ensure maintainability</li>
                <li>The layout is fully responsive and optimized for different screen sizes</li>
            </ul>
            <ul>
                <h4>Technical Stack</h4>
                <li>React for building a modular, component-based UI</li>
                <li>React Router for client-side navigation and route management</li>
                <li>Axios for handling HTTP requests to the Spoonacular API</li>
                <li>React Hooks for state and lifecycle management</li>
                <li>Redux or Context API for global state management</li>
            </ul>
        </div>
        <div className="project-preview-container">
            <img className="veggiebook-preview" src={VeggiBookPreview} alt="VeggieBook app preview"/>
        </div>
        <div className="github-bt-container">
            <a className="github-project-button"
                href="https://github.com/NicolaRo/veggiebook" 
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

export default VeggieBook;