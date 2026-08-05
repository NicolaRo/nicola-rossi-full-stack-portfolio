import AIIcon from '../assets/stack-icons/AI.png';
import CssIcon from '../assets/stack-icons/css.png';
import HtmlIcon from '../assets/stack-icons/html.png';
import JavascriptIcon from '../assets/stack-icons/javascript.png';
import MongoDBIcon from '../assets/stack-icons/mongoDB.png';
import NodejsIcon from '../assets/stack-icons/nodejs.png';
import ReactIcon from '../assets/stack-icons/react.png';
import TypescriptIcon from '../assets/stack-icons/typescript.png';
import WordpressIcon from '../assets/stack-icons/wordpress.png';

function CvTools () {
    return (
        <>
        <div className ="stacks-container">
        <h2 className= "text-h2">My stacks</h2>
        <div className="tools-grid">
        <img 
                className="language-icon" 
                src={HtmlIcon}
                alt="HTML-logo"
            />

            <img 
                className="language-icon" 
                src={CssIcon}
                alt="CSS-logo"
            />

            <img 
                className="language-icon" 
                src={JavascriptIcon}
                alt="Javascript logo"
            />

            <img 
                className="language-icon" 
                src={TypescriptIcon}
                alt="Typescript logo"
            />
                
            <img 
                className="language-icon" 
                src={ReactIcon}
                alt="React logo"
            />

            <img 
                className="language-icon" 
                src={NodejsIcon}
                alt="NodeJs logo"
            />

            <img 
                className="language-icon" 
                src={MongoDBIcon}
                alt="MongoDBL logo"
            />
 

            <img 
                className="language-icon" 
                src={AIIcon}
                alt ="AI logo"
            />
            <img 
                className="language-icon" 
                src={WordpressIcon}
                alt ="Wordpress logo"
            />
        </div>
        </div>

            
        </>
    );
}

export default CvTools;
