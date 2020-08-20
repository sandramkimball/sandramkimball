import React from 'react';
import '../App.css';

//components
import Banner_0 from './Banner_0';
import Banner_1 from './Banner_1';
import Banner_2 from './Banner_2';
import Banner_3 from './Banner_3';
import ProjectCarousel from './Carousel';

function Home() {

  return (
    <div className="App">
      <header className="App-header">
        <div id = 'body'>
          <Banner_0/>
          <Banner_1 className='banner-wrapper'/>
          <Banner_2/>
          <Banner_3/>
          <ProjectCarousel/>
        </div>
      </header>
    </div>
  );
}

export default Home;