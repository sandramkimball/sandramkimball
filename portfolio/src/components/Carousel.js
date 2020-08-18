import React from 'react';
import { Link } from 'react-router-dom';
import Styled from "styled-components";
import projects from './Projects'
import Carousel from 'react-bootstrap/Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const ProjectCarousel = () => {

    const rightIcon = <FontAwesomeIcon icon={faChevronRight} />
    const leftIcon =  <FontAwesomeIcon icon={faChevronLeft} />

    return (
        <CarouselContainer className='carousel-banner'>
            <div className='desc'>
                <p>Projects are designed with users in mind, utilizing the latest technology to achieve responsiveness, accessibility and security.</p>
                <Link to='/projects'><h4>View Project Gallery</h4></Link>
            </div>
            <div> 
                <Carousel indicators={false} nextIcon ={rightIcon} prevIcon={leftIcon}>
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
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={projects[7].img}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <a href={projects[7].href} target="_blank">
                            <h2>{projects[7].title}</h2>
                            </a>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
      </CarouselContainer>
    )
}

export default ProjectCarousel

const CarouselContainer = Styled.section`
    height: 60vh;
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin: 10vh auto;
    div{ 
        width: 40vw; 
        margin: auto
    }
    .carousel{
        color: #000;
        box-shadow: 0 4px 8px gray;
        font-size: 1rem;
        text-decoration: none;
        list-style: none
    }
    .desc{
        margin: auto;
        p {
            font-size: 1.25rem
        }
    }

    .carousel-caption {
        position: initial;
        margin: 2px auto;
        text-decoration: none;
        color: gray;
        background: rgb(235, 233, 233)
    }
    .carousel-caption a{
        color: #000;
    }      
    .carousel-caption h2 {
        font-size: 1.2rem
    }      
    .carousel svg{
        font-size: 50px;
        color: #000;
        opacity: 1;
    }
    .carousel-control-next, .carousel-control-prev{
        width: 10%;
    }
    .carousel-control-next:hover, .carousel-control-prev:hover{
        background: rgba(128, 128, 128, 0.418);
    }
`;