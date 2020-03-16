import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import './App.css';
// import {useSpring, animated} from 'react-spring';


//components
import Banner_Home from './components/Banner_Home';
import Banner_1 from './components/Banner_1';
import Banner_2 from './components/Banner_2';
import Banner_3 from './components/Banner_3';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <nav id="navbar">
          <ul>
            <a href="#1"><li>ABOUT</li></a>
            <a href="#2"><li>SKILLS</li></a>
            <a href="#3"><li>PROJECTS</li></a>
          </ul>
        </nav>
        <div id = 'body'>
          <Banner_Home/>
          <Banner_1 className='banner-wrapper'/>
          <Banner_2 />
          <Banner_3/>
        </div>
      </Router>         
      </header>
    </div>
  );
}

export default App;
