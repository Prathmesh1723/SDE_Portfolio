import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineGlobe  } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiOutlineDesktopComputer className="about__icon" />
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">1 Year</span>
        </div>
        <div className="about__box">
            <HiOutlineTerminal className="about__icon" />
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10+ Projects</span>
        </div>
        <div className="about__box">
            <HiOutlineGlobe className="about__icon" />
            <h3 className="about__title">Location</h3>
            <span className="about__subtitle">United States</span>
        </div>
    </div>
  );
}

export default Info;