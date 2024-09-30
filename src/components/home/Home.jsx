import React from 'react'
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import Scroll from "./Scroll";
import ReactGA from 'react-ga4'
import { useEffect } from 'react';


const Home = () => {
  useEffect(() => {
    ReactGA.send({ 
      hitType: "pageview", 
      page: window.location.pathname + window.location.search, 
      title: "Home Page" });
  }, []);
  return (
    <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />
                    <div className="home__img"></div>
                    <Data />
                </div>
                <Scroll />
            </div> 
        </section>
  )
}

export default Home