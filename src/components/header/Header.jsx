import React, { useState } from 'react'
import "./header.css";
import CV from "../../assets/CPP_Resume.pdf";
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, HiOutlineClipboardList, HiOutlinePhotograph, HiOutlineMail } from "react-icons/hi";
import ReactGA from "react-ga";

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });
   
    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");

    const handleResumeClick = () => {
        ReactGA.event({
            category: 'Navigation',
            action: 'Clicked Resume',
            label: 'Resume Menu Item Clicked'
        });
    };
    
    return (
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Prathmesh</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")} 
                            className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineHome className="nav__icon"/>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav("#about")} 
                            className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineUser className="nav__icon"/>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav("#skills")} 
                            className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineBadgeCheck className="nav__icon"/>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" onClick={() => setActiveNav("#services")} 
                            className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlinePhotograph className="nav__icon"/>Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href={CV} onClick={() => {setActiveNav("#resume"); handleResumeClick();} }
                            className={activeNav === "#resume" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineClipboardList className="nav__icon"/>Resume
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav("#contact")} 
                            className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineMail className="nav__icon"/>Contact
                            </a>
                        </li>
                </ul>

                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header