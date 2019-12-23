import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

//components
import Projects from './components/Projects';
import LeftBar from './components/Left-Bar';
import MainPage from './components/MainPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <div className='navigation'>
          <nav id="navbar">
            <ul>
                <Link to='/mainpage'><a href="#mainpage" id='Hello'>Hello!</a></Link>
                <Link to='/projects'><a href="#pg3"><li>Projects</li></a></Link>
                <a href="https://www.linkedin.com/in/sandy-kimball-9b7461192/" target="_blank"><li>LinkedIn</li></a>
                <a href="https://github.com/sandramkimball?tab=repositories" target="_blank"><li>Github</li></a>
            </ul>
          </nav>
        </div>
        <div className = 'body'>
          <LeftBar className='banner-wrapper'/>
          <Switch> 
            <Route path='/mainpage'>
              <MainPage/>
            </Route>
            <Route path='/projects'>
              <Projects/>
            </Route>
          </Switch>
        </div>
        </Router>          
       
      </header>
    </div>
  );
}

export default App;
