import React from 'react';
import projects from './ProjectSlides'
import Carousel from 'react-bootstrap/Carousel'

const ProjectCarousel = () => {

    const styles = {
        width: '50vw',
        color: 'black', 
        margin: '15% auto',
        'box-shadow': '0 4px 8px gray',
        'font-size': '1rem',
        color: 'black',
        'text-decoration': 'none'
    }

    return (
        <section style={{height: '90vh'}}>
        <Carousel style={styles}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={projects[0].img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <a href={projects[0].href} target="_blank">
                    <h2>{projects[0].title}</h2>
                    <p >{projects[0].stack}</p>
                    <p>{projects[0].text}</p>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={projects[1].img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <a href={projects[1].href} target="_blank">
                    <h2>{projects[1].title}</h2>
                    <p >{projects[1].stack}</p>
                    <p>{projects[1].text}</p>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={projects[2].img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <a href={projects[2].href} target="_blank">
                    <h2>{projects[2].title}</h2>
                    <p >{projects[2].stack}</p>
                    <p>{projects[2].text}</p>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={projects[3].img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <a href={projects[3].href} target="_blank">
                    <h2>{projects[3].title}</h2>
                    <p >{projects[3].stack}</p>
                    <p>{projects[3].text}</p>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={projects[4].img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <a href={projects[4].href} target="_blank">
                    <h2>{projects[4].title}</h2>
                    <p >{projects[4].stack}</p>
                    <p>{projects[4].text}</p>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={projects[5].img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <a href={projects[5].href} target="_blank">
                    <h2>{projects[5].title}</h2>
                    <p >{projects[5].stack}</p>
                    <p>{projects[5].text}</p>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={projects[6].img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <a href={projects[6].href} target="_blank">
                    <h2>{projects[6].title}</h2>
                    <p >{projects[6].stack}</p>
                    <p>{projects[6].text}</p>
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
      </section>
    )
}

export default ProjectCarousel