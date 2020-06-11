import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import './App.css';

//components
import Home from './components/Home';
import ProjectPage from './components/ProjectPage';
import my_resume from './images/Resume.pdf'

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <nav id="navbar">
          <ul>
            <Link to='/' >ABOUT</Link>
            <Link to='/projects' >PROJECTS</Link>
            <a href={my_resume} target='_blank' data-testid='resume-btn'><li>RESUME</li></a>
          </ul>
        </nav>
        <div id = 'body'>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/projects' component={ProjectPage}/> 
          </Switch>
        </div>
      </Router>         
      </header>
    </div>
  );
}

export default App;
