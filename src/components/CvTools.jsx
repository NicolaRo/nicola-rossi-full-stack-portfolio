  

function CvTools () {
    return (
        <><h1>
        Tools I use 
    </h1>
        <section className="tools-section">
            <div className="skills-container-1">

            <div className="skills-bar">
                    <img className="language-icon" src="/images/languages-img/html.png" alt="HTML-logo"/>
                        <div className="bar back advanced" data-skill="HTML" ></div>
                </div>

                <div className="skills-bar">
                <img className="language-icon" src="/images/languages-img/css.png"alt="CSS-logo"/>
                        <div className="bar back advanced" data-skill="CSS"></div>
                </div>

                <div className="skills-bar">
                    <img className="language-icon" src="/images/languages-img/javascript.png"alt="Javascript logo"/>
                        <div className="bar back intermediate" data-skill="JavaScript"></div>
                </div>

                <div className="skills-bar">
                    <img className="language-icon" src="/images/languages-img/typescript.png"alt="Typescript logo"/>
                        <div className="bar back intermediate" data-skill="Typescript"></div>
                </div>
            </div>
            <div className="skills-container-2">
                
                <div className="skills-bar">
                    <img className="language-icon" src="/images/languages-img/react.png"alt="React logo"/>
                        <div className="bar back intermediate" data-skill="React"></div>
                </div>

                <div className="skills-bar">
                    <img className="language-icon" src="/images/languages-img/nodejs.png"alt="NodeJs logo"/>
                        <div className="bar front learning" data-skill="NodeJS"></div>
                </div>
                
                <div className="skills-bar">
                    <img className="language-icon" src="/images/languages-img/mysql.png"alt="MySQL logo"/>
                        <div className="bar front learning" data-skill="MySql"></div>
                </div>

                <div className="skills-bar">
                    <img className="language-icon" src="/images/languages-img/php.png"alt="PHP logo"/>
                        <div className="bar front learning" data-skill="PHP"></div>
                </div>

            </div>
        </section>    
        </>
    );
}

export default CvTools;
