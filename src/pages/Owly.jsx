//Importo le immagini
import OwlyPreview from "../assets/images/Projects-img/Owly-preview.gif";
import OwlyLogo from "../assets/images/Projects-img/Owly-logo.png";
import GitHubLogo from '../assets/images/footer-img/Github-Logo-Black.png';

//Importo i componenti
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

function Owly () {

    return (
        <>
        <Navbar />
            <h1>Page Owly</h1>
            <img className="project-desc-logo" src={OwlyLogo} alt="Owly logo" />
            <h3>Project Brief</h3>
            <h4>Search and explore books by category using Open Library APIs</h4>
            <p>This project consists of a lightweight web application that allows users to search for books by category through a clean, minimal input interface inspired by modern search engines.</p>
            <p>The application integrates with the Open Library public APIs to retrieve and display structured book data in real time.</p>
            <ul>
                <h4>Functional Overview</h4>
                <li>Users can choose from a dropdown menu the search criteria and enter a book category into a text input and trigger a search via a dedicated action.</li>
                <li>The application fetches a list of books related to the selected category from the Open Library Subjects endpoint.</li>
                <li>Search results are presented by displaying the book title along with its associated authors.</li>
                <li>Selecting a book allows the user to access additional details, including the full description.</li>
                <li>Book details are retrieved through a secondary API request based on the unique book key provided in the initial response.</li>
            </ul>
            <h4>Data Flow Example</h4>
            <p>When a user searches for the category <strong>fantasy</strong>, the application queries the Open Library API.</p>
            <p>If a book such as <em>Alice's Adventures in Wonderland</em> is returned with it specific key, the application uses this identifier to request and render the complete book description from the corresponding Open Library endpoint.</p>
            <div className="project-preview-container">
                <img 
                    className="owly-preview" 
                    src={OwlyPreview} 
                    alt="Owly app preview"
                />
            </div>
            <div className="github-bt-container">
                <a
                    className="github-project-button"
                    href="https://github.com/NicolaRo/owly" 
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

export default Owly;