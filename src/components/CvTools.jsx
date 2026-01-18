//Importo le immagini
import CSSLogo from "../assets/images/languages-img/CSS-logo.png";
import HTMLLogo from "../assets/images/languages-img/HTML-logo.png";
import JavascriptLogo from "../assets/images/languages-img/Javascript-logo.png";
import ReactLogo from "../assets/images/languages-img/React-logo.png";
import TypescriptLogo from "../assets/images/languages-img/Typescript_Sviluppo-logo.png";
import NodeJsLogo from "../assets/images/languages-img/NodeJs-logo.png";
import MySQLLogo from "../assets/images/languages-img/MySQL-logo.png";
import PHPLogo from "../assets/images/languages-img/PHP-logo.png";      

function CvTools () {
    return (
        <><h1>
        Tools I use 
    </h1>
        <section className="tools-section">
            <div className="skills-container-1">

            <div className="skills-bar">
                    <img className="language-icon" src={ HTMLLogo} alt="HTML-logo"/>
                        <div className="bar back advanced" data-skill="HTML" ></div>
                </div>

                <div className="skills-bar">
                    <img className="language-icon" src={CSSLogo} alt="CSS-logo"/>
                        <div className="bar back advanced" data-skill="CSS"></div>
                </div>

                <div className="skills-bar">
                    <img className="language-icon" src={JavascriptLogo} alt="Javascript logo"/>
                        <div className="bar back intermediate" data-skill="JavaScript"></div>
                </div>

                <div className="skills-bar">
                    <img className="language-icon" src={ TypescriptLogo} alt="Typescript logo"/>
                        <div className="bar back intermediate" data-skill="Typescript"></div>
                </div>
            </div>
            <div className="skills-container-2">
                
                <div className="skills-bar">
                    <img className="language-icon" src={ReactLogo} alt="React logo"/>
                        <div className="bar back intermediate" data-skill="React"></div>
                </div>

                <div className="skills-bar">
                    <img className="language-icon" src={NodeJsLogo} alt="NodeJs logo"/>
                        <div className="bar front learning" data-skill="NodeJS"></div>
                </div>
                
                <div className="skills-bar">
                    <img className="language-icon" src={MySQLLogo} alt="MySQL logo"/>
                        <div className="bar front learning" data-skill="MySql"></div>
                </div>

                <div className="skills-bar">
                    <img className="language-icon" src={PHPLogo} alt="PHP logo"/>
                        <div className="bar front learning" data-skill="PHP"></div>
                </div>

            </div>
        </section>    
        </>
    );
}

export default CvTools;