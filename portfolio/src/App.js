import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

//components
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
                <Link to='/mainpage'><a href="#mainpage" id='Hello'>Hello!</a></Link>
                <Link to='/projects'><a href="#pg3"><li>Projects</li></a></Link>
                <a href="https://www.linkedin.com/in/sandy-kimball-9b7461192/" target="_blank"><li>LinkedIn</li></a>
                <a href="https://github.com/sandramkimball?tab=repositories" target="_blank"><li>Github</li></a>
            </ul>
          </nav>
          <div className = 'body'>
            <Banner_1 className='banner-wrapper'/>
            <Banner_2/>
            <Banner_3/>
          </div>
      </Router>         
      </header>
    </div>
  );
}

export default App;
