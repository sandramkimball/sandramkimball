// https://www.npmjs.com/package/react-responsive-carousel
import React from 'react';
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import projects from './ProjectSlides'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

const ProjectCarousel = () => {
    return (
        <section style={{width: '70vw', margin: 'auto'}}>
        <Carousel style={styles} >
            <div>
                <a href={projects[0].href} target="_blank">  
                    <img src={projects[0].img} /> 
                    <h2>{projects[0].title}</h2>
                    <p >{projects[0].stack}</p>
                    <p>{projects[0].text}</p>
                </a>
            </div>

            <div>
                <a href={projects[1].href} target="_blank">  
                    <img src={projects[1].img} /> 
                    <h2>{projects[1].title}</h2>
                    <p >{projects[1].stack}</p>
                    <p>{projects[1].text}</p>
                </a>
            </div>
            <div>
                <a href={projects[2].href} target="_blank">  
                    <img src={projects[2].img} /> 
                    <h2>{projects[2].title}</h2>
                    <p >{projects[2].stack}</p>
                    <p>{projects[2].text}</p>
                </a>
            </div>

            <div>
                <a href={projects[3].href} target="_blank">  
                    <img src={projects[3].img} /> 
                    <h2>{projects[3].title}</h2>
                    <p >{projects[3].stack}</p>
                    <p>{projects[3].text}</p>
                </a>
            </div>
            <div>
                <a href={projects[4].href} target="_blank">  
                    <img src={projects[4].img} /> 
                    <h2>{projects[4].title}</h2>
                    <p >{projects[4].stack}</p>
                    <p>{projects[4].text}</p>
                </a>
            </div>

            <div>
                <a href={projects[5].href} target="_blank">  
                    <img src={projects[5].img} /> 
                    <h2>{projects[5].title}</h2>
                    <p >{projects[5].stack}</p>
                    <p>{projects[5].text}</p>
                </a>
            </div>

            <div>
                <a href={projects[6].href} target="_blank">  
                    <img src={projects[6].img} /> 
                    <h2>{projects[6].title}</h2>
                    <p >{projects[6].stack}</p>
                    <p>{projects[6].text}</p>
                </a>
            </div>
        </Carousel>
        </section>
    )
}

export default ProjectCarousel

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls