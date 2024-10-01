import React, { useState, useEffect } from 'react';
import './projects.css';
import { HiOutlineClipboardList, HiOutlineArrowSmRight, HiOutlineCheckCircle, HiX } from 'react-icons/hi';
import ReactGA from "react-ga4";

const Projects = () => {

    useEffect(() => {
        ReactGA.send({ 
          hitType: "pageview", 
          page: window.location.pathname + window.location.search, 
          title: "About" });
      }, []);

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
    <section className="services section" id="services">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My creations</span>
    
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">Learn <br/> Pilot</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>
                    View More
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Deployed RESTful API on AWS with Terraform
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Services used : VPC, RDS, EC2, SNS, DynamoDB & Lambda
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Modelled custom GitHub Actions to setup CI/CD pipelines
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    custom AMI image with Packer
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Leveraged CloudWatch logs to monitor key metrics
                                </p>
                            </li>
                            <br/>
                            <span className="services__button" onClick= {() => toggleTab(1)}>
                                <a href="https://github.com/CSYE6225-Netwrk-Strctres-Cloud-Computng/webapp" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    View More
                                <HiOutlineArrowSmRight className="services__button-icon" />
                                </a>
                            </span>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">Quantum <br /> Pulse</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>
                    View More
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Designed a real-time stock market data processing system
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Used Linux APIs & advanced C++ features like smart pointers
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Leveraged the concepts of Multi threading & Data structures
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Learnt system design concepts
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Implemented real-time analysis algorithms
                                </p>
                            </li>
                            <br/>
                            <span className="services__button" onClick={() => toggleTab(2)}>
                                <a href="https://github.com/Prathmesh1723" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    View More
                                <HiOutlineArrowSmRight className="services__button-icon" />
                                </a>
                            </span>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">Residential <br />Management System<br /></h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(3)}>
                    View More
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <HiX onClick={() => toggleTab(0)} className="services__modal-close" />

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Implemented a robust relational database using PL/SQL
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Used stored procedures, functions & triggers automating queries
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Restricted access through database roles, users to protect tenant data
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Ensured ACID property is maintained for transactions
                                </p>
                            </li>
                            <br/>
                            <span className="services__button" onClick={() => toggleTab(3)}>
                                <a href="https://github.com/Prathmesh1723/Residential-Management-System" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    View More
                                <HiOutlineArrowSmRight className="services__button-icon" />
                                </a>
                            </span>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">Insurance <br /> Policy Navigator</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(4)}>
                    View More
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Designed a Big Data web app to manage insurance plans
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Utilized Redis for efficient data storage 
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Token-based authentication using Google OAuth 2.0
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Utilized Redis for efficient data storage 
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Incorporated Elasticsearch for handling parent-child indexing
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Employed RabbitMQ to enable asynchronous communication 
                                </p>
                            </li>
                            <br />
                            <span className="services__button" onClick={() => toggleTab(4)}>
                                <a href="https://github.com/Prathmesh1723/REST-API" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    View More
                                <HiOutlineArrowSmRight className="services__button-icon" />
                                </a>
                            </span>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">Amazon x <br /> Twitter (Figma)</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(5)}>
                    View More
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                        
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Create a user friendly interface
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Develop with a minimal approach
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Design with accessibility in mind
                                </p>
                            </li>
                            <br/>
                            <span className="services__button" onClick={() => toggleTab(5)}>
                                <a href="https://www.figma.com/design/kCiOf2QUkOoZviFVyJxjVw/Prathmesh-Pardeshi-Fall2023?node-id=121-3&t=Kh8dxE7Avx6H90G4-1" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    View More
                                <HiOutlineArrowSmRight className="services__button-icon" />
                                </a>
                            </span>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <HiOutlineClipboardList className="services__icon" />
                    <h3 className="services__title">RentPe <br /> Rental Platform</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(6)}>
                    View More
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
                <div className={toggleState === 6 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                    <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Developed MERN stack web application for house rentals/sales
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Integrated a property checklist leveraging Redux Toolkit
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Employed React, Sass and Bootstrap for the frontend
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Used Redux for state management
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <HiOutlineCheckCircle className="services__modal-icon" />
                                <p className="services__modal-info">
                                    Utilized Node.js Express Architecture, CORS for authentication
                                </p>
                            </li>
                            <br/>
                            <span className="services__button" onClick={() => toggleTab(6)}>
                                <a href="https://github.com/Prathmesh1723/RenPe-Rental-Platform-React" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    View More
                                <HiOutlineArrowSmRight className="services__button-icon" />
                                </a>
                            </span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  );
}

export default Projects;