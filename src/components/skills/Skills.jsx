import React, { useState }  from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Programming from './Programming';
import Cloud from './Cloud';

const Skills = () => {

  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="skills section" id="skills">
        <div 
          className="skills__title-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h2 className="section__title">Skills</h2>
          {isHovered && <div className="skills__tooltip">My hidden skills are Sketching, Painting and Hikking</div>}
        </div>
        <span className="section__subtitle">Things I am good at</span>
        <div className="skills__container container grid">
            <Frontend />
            <Backend /> 
            <Programming />
            <Cloud />
        </div>
    </section>
  );
}

export default Skills;