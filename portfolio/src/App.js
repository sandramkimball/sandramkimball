import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
// import {useSpring, animated} from 'react-spring';


//components
import Banner_0 from './components/Banner_0';
import Banner_1 from './components/Banner_1';
import Banner_2 from './components/Banner_2';
import ProjectCarousel from './components/Carousel';
import my_resume from './images/Resume.pdf'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <nav id="navbar">
          <ul>
            <a href="#1"><li>ABOUT</li></a>
            <a href="#2"><li>SKILLS</li></a>
            <a href={my_resume} target='_blank' data-testid='resume-btn'><li>RESUME</li></a>
            <a href="#3"><li>PROJECTS</li></a>
          </ul>
        </nav>
        <div id = 'body'>
          <Banner_0/>
          <Banner_1 className='banner-wrapper'/>
          <Banner_2 />
          <ProjectCarousel/>
        </div>
      </Router>         
      </header>
    </div>
  );
}

export default App;
