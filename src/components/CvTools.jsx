import AIIcon from '../assets/stack-icons/AI.png';
import CssIcon from '../assets/stack-icons/css.png';
import HtmlIcon from '../assets/stack-icons/html.png';
import JavascriptIcon from '../assets/stack-icons/javascript.png';
import MongoDBIcon from '../assets/stack-icons/mongoDB.png';
import NodejsIcon from '../assets/stack-icons/nodejs.png';
import ReactIcon from '../assets/stack-icons/react.png';
import TypescriptIcon from '../assets/stack-icons/typescript.png';
import WordpressIcon from '../assets/stack-icons/wordpress.png';
import PostmanIcon from '../assets/stack-icons/postman.png';
import GitIcon from '../assets/stack-icons/git.png';
import ViteIcon from '../assets/stack-icons/vite.png';
import SassIcon  from '../assets/stack-icons/sass.png';
import N8nIcon from '../assets/stack-icons/n8n.png';

function CvTools () {
    return (
        <>
        <div className ="stacks-container">
        <h2 className= "text-h2">My Stacks</h2>
        <div className="tools-grid">
            <div className="stack-item">
                <img 
                    className="language-icon" 
                    src={ViteIcon}
                    alt="Vite-logo"
                />
                <p className="visible-stack-name">Vite</p>
            </div>
            <div className="stack-item">
                <img 
                    className="language-icon" 
                    src={N8nIcon}
                    alt="N8n-logo"
                />
                <p className="visible-stack-name">n8n.com</p>
            </div>
            <div className="stack-item">
                <img 
                    className="language-icon" 
                    src={SassIcon}
                    alt="Sass-logo"
                />
                <p className="visible-stack-name">Sass</p>
            </div>
            <div className="stack-item">
                <img 
                    className="language-icon" 
                    src={PostmanIcon}
                    alt="Postman-logo"
                />
                <p className="visible-stack-name">Postman</p>
            </div>
            <div className="stack-item">
                <img 
                    className="language-icon" 
                    src={GitIcon}
                    alt="Git-logo"
                />
                <p className="visible-stack-name">Git</p>
            </div>
            <div className="stack-item">
                <img 
                    className="language-icon" 
                    src={HtmlIcon}
                    alt="HTML-logo"
                />
                <p className="visible-stack-name">HTML</p>
            </div>
            <div className="stack-item">
                <img 
                    className="language-icon" 
                    src={CssIcon}
                    alt="CSS-logo"
                />
                <p className="visible-stack-name">CSS</p>
            </div>
            <div className="stack-item">
                <img 
                    className="language-icon" 
                    src={JavascriptIcon}
                    alt="Javascript logo"
                />
                <p className="visible-stack-name">JavaScript</p>
            </div>
            
            <div className="stack-item">
                <img 
                    className="language-icon" 
                    src={TypescriptIcon}
                    alt="Typescript logo"
                />
                <p className="visible-stack-name">TypeScript</p>
            </div>
            
            <div className="stack-item">
                <img 
                    className="language-icon" 
                    src={ReactIcon}
                    alt="React logo"
                />
                <p className="visible-stack-name">React</p>
            </div>

            <div className="stack-item">
                <img 
                    className="language-icon" 
                    src={NodejsIcon}
                    alt="NodeJs logo"
                />
                <p className="visible-stack-name">NodeJS</p>
            </div>
            
            <div className="stack-item">
                <img 
                    className="language-icon" 
                    src={MongoDBIcon}
                    alt="MongoDBL logo"
                />
                <p className="visible-stack-name">MongoDB</p>
            </div>

            <div className="stack-item">
                <img 
                    className="language-icon" 
                    src={AIIcon}
                    alt ="AI logo"
                />
                <p className="visible-stack-name">AI Automation</p>
            </div>
            
            <div className="stack-item">
                <img 
                    className="language-icon" 
                    src={WordpressIcon}
                    alt ="Wordpress logo"
                />
                <p className="visible-stack-name">Wordpress</p>
            </div>
        </div>
        </div>

            
        </>
    );
}

export default CvTools;
