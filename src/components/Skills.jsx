import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

<section class="Skills-container">
  <h1>Tools I use </h1>
  <div class="skills-bars-container">
    <div class="Skills_1-2">
      <div class="skills-bar">
      
      <img 
        className="skill-icon"
        src="/images/languages-img/HTML-logo.png"
        alt="Logo Html"/>
        
        <div class="bar back intermediate" data-skill="Html"></div>
      </div>
      <div class="skills-bar">
      
      <img 
        className="skill-icon"
        src="/images/languages-img/CSS-logo.png" 
        alt="logo CSS"/>
      
      <div class="bar back intermediate" data-skill="CSS"></div>
      </div>
      <div class="skills-bar">
      
      <img 
        className="skill-icon"
        src="/imgages/languages-img/Javascript-logo.png"
        alt="logo JavaScript"/>
      
      <div class="bar back learning" data-skill="JavaScript"></div>
      </div>
      
    </div>  

    <div class="Skills_2-2">
      <div className="skills-bar">
      <img 
        className="skill-icon"
        src="/images/languages-img/TypeScript_Sviluppo-logo.png" 
        alt="logo TypeScript" />
      <div class="bar front learning" data-skill="TypeScript"></div>
      </div>
      <div class="skills-bar">
      <img 
        class="skill-icon"
        src="./img/CV-img/React-logo.png"
        alt="Logo React" />
      
      <div class="bar front learning" data-skill="React"></div>
      </div>

      <div class="skills-bar">
      <img 
        className="skill-icon"
        src="/imgages/languages-img/NodeJs-logo.png"
        alt="logo NodeJs"/>

      <div class="bar front learning" data-skill="NodeJs"></div>
      </div>

      <div class="skills-bar">
      <img 
        className="skill-icon"
        src="/imgages/languages-img/MySQL-logo.png"
        alt="logo MySQL"/>

      <div class="bar front learning" data-skill="MySQL"></div>
      </div>

      <div class="skills-bar">
      <img
        className="skill-icon"
        src="/imgages/languages-img/Worpress-logo.png" alt="Wordpress-logo"/>
      <div class="bar front learning" data-skill="Wordpress"></div>
      </div>
    </div>
  </div>
</section> 