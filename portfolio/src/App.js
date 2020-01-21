import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

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
                <Link to='/bio'><a href="#1"><li>Bio</li></a></Link>
                <Link to='/skills'><a href="#2"><li>Skills</li></a></Link>
                <Link to='/projects'><a href="#3"><li>Projects</li></a></Link>
                </ul>
          </nav>
          <div className = 'body'>
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
