//Importo le immagini
import cssLogo from "../assets/images/languages-img/CSS-logo.png";
import htmlLogo from "../assets/images/languages-img/HTML-logo.png";
import javascriptLogo from "../assets/images/languages-img/Javascript-logo.png";
import reactLogo from "../assets/images/languages-img/React-logo.png";
import typescriptLogo from "../assets/images/languages-img/Typescript_Sviluppo-logo.png";
import nodejsLogo from "../assets/images/languages-img/NodeJs-logo.png";
import mysqlLogo from "../assets/images/languages-img/MySQL-logo.png";
import phpLogo from "../assets/images/languages-img/PHP-logo.png";      

function CvTools () {
    return (
        <><h1>
        Tools I use 
    </h1>
        <section className="tools-section">
            <div className="skills-container-1">

            <div className="skills-bar">
                    <img className="language-icon" src={ htmlLogo} alt="HTML-logo"/>
                        <div className="bar back advanced" data-skill="HTML" ></div>
                </div>

                <div className="skills-bar">
                    <img className="language-icon" src={cssLogo} alt="CSS-logo"/>
                        <div className="bar back advanced" data-skill="CSS"></div>
                </div>

                <div className="skills-bar">
                    <img className="language-icon" src={javascriptLogo} alt="Javascript logo"/>
                        <div className="bar back intermediate" data-skill="JavaScript"></div>
                </div>

                <div className="skills-bar">
                    <img className="language-icon" src={ typescriptLogo} alt="Typescript logo"/>
                        <div className="bar back intermediate" data-skill="Typescript"></div>
                </div>
            </div>
            <div className="skills-container-2">
                
                <div className="skills-bar">
                    <img className="language-icon" src={reactLogo} alt="React logo"/>
                        <div className="bar back intermediate" data-skill="React"></div>
                </div>

                <div className="skills-bar">
                    <img className="language-icon" src={nodejsLogo} alt="NodeJs logo"/>
                        <div className="bar front learning" data-skill="NodeJS"></div>
                </div>
                
                <div className="skills-bar">
                    <img className="language-icon" src={mysqlLogo} alt="MySQL logo"/>
                        <div className="bar front learning" data-skill="MySql"></div>
                </div>

                <div className="skills-bar">
                    <img className="language-icon" src={phpLogo} alt="PHP logo"/>
                        <div className="bar front learning" data-skill="PHP"></div>
                </div>

            </div>
        </section>    
        </>
    );
}

export default CvTools;
