import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Projects from './components/projects/Projects';
import ReactGA from 'react-ga4'

const TRACKING_ID = "G-TWDLX47CLE";
ReactGA.initialize(TRACKING_ID);

function App() {

  return (
    <>
    <Header/>

    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Qualification/>
      <Contact/>
    </main>

    <Footer/>
    <ScrollUp/>
    </>
  );
}

export default App;
