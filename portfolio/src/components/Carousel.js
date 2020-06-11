import React from 'react';
import { Link } from 'react-router-dom';
import Styled from "styled-components";
import projects from './Projects'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const ProjectCarousel = () => {

    const styles = {
        width: '40vw',
        color: 'black', 
        margin: '5% auto',
        'box-shadow': '0 4px 8px gray',
        'font-size': '1rem',
        'text-decoration': 'none',
        'list-style': 'none',
    };

    const rightIcon = <FontAwesomeIcon icon={faChevronRight} />
    const leftIcon =  <FontAwesomeIcon icon={faChevronLeft} />

    return (
        <CarouselCont>
            <div> 
                <Carousel style={styles} indicators={false} nextIcon ={rightIcon} prevIcon={leftIcon}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={projects[0].img}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <a href={projects[0].href} target="_blank">
                            <h2>{projects[0].title}</h2>
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
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='desc'>
                <p>Projects are designed with users in mind, utilizing the latest technology to achieve responsiveness, accessibility and security.</p>
                <Link to='/projects'><h3>View Project Gallery</h3></Link>
            </div>

      </CarouselCont>
    )
}

export default ProjectCarousel

const CarouselCont = Styled.section`
    height: 60vh;
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    margin: 10vh auto;
    .desc{
        margin: auto;
        width: 60%;
        p {
            font-size: 1.25rem
        }
    }
`;