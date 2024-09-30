import React from 'react'
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.facebook.com/prathmesh.pardeshi1" className="home__social-icon" rel="noopener noreferrer" target="_blank">
            <FiTwitter />
        </a>
        <a href="https://github.com/Prathmesh1723" className="home__social-icon" rel="noopener noreferrer" target="_blank">
            <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/prathmesh-pardeshi/" className="home__social-icon" rel="noopener noreferrer" target="_blank">
            <FiLinkedin />
        </a>
    </div> 
  );
}

export default Social