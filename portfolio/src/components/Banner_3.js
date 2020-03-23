import React, {useState} from 'react';
import styled from 'styled-components';
import {useTransition, animated} from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

//images
import homepage from '../images/tinyHomepage.png';
import icnst from '../images/icnst.jpg';
import sautidb3 from '../images/sautidb3.png';
import stylist from '../images/stylist-find.png';
import mars from '../images/mars-explor.png';

const slides = [
    ({style}) => <animated.div style={{...style, cursor: 'pointer'}}>
                <a href='https://foodie-fun-app.netlify.com/?_ga=2.228749211.602302675.1567105491-253791327.1567105491' target="_blank">
                    <img src={homepage}/>
                    <h2>Foodie Fun UI</h2>
                    <p>Collaborated with a UX designer to build a marketing site for a food blog app.</p>
                </a>
                </animated.div>,
    ({style}) => <animated.div style={{...style, cursor: 'pointer'}}>
                <a href='https://icnst-development.netlify.com/' target="_blank">  
                    <img src={icnst}/> 
                    <h2>Child Nutrition Tracker</h2>
                    <p>Worked in collabe with a senior React developer to build out components, forms, routes for an application designed to help doctors in foreign nations log and chart health information for patients.</p>
                </a>
                </animated.div>,
    ({style}) => <animated.div style={{...style,cursor: 'pointer'}}>
                <a href='https://sauti.now.sh/' target="_blank">
                    <img src={sautidb3}/>
                    <h2>Sauti Traders</h2>
                    <p>Worked on a team of five with a non-profit organization to deliver a cross-filtration search platform for traders data collected by the organization.</p>
                </a>
                </animated.div>,
    ({style}) => <animated.div style={{...style, cursor: 'pointer'}}>
                    <a href='https://stylistfind.now.sh/' target="_blank">
                        <img src={stylist}/>
                        <h2>Stylist Find</h2>
                        <p>Built a SQL database, populated it with dummy data, and used it in a front end application designed as a professional platform for hairstylists to self promote.</p>
                    </a>
                    </animated.div>,
    ({style}) => <animated.div style={{...style, cursor: 'pointer'}}>
    <a>
        <img src={mars}/>
        <h2>Coming Soon</h2>
        <p>Online Python/Django maze game.</p>
    </a>
    </animated.div>,
]

const Projects = () => {
    const [index, set] = useState(0)
    const handleClick = () => (set(state => (state + 1) % 5), [])
    const handleBackClick = () => (set(state => (state + 4) % 5), [])
    const transitions = useTransition(index, p => p, {
        from: {opacity: 0, transform: 'translated3d( 100%, 0, 0'},
        enter: {opacity: 1, transform: 'translated3d(0%, 0, 0'},
        leave: {opacity: 0, transform: 'translated3d(-100%, 0, 0'},
    })


    return (
        <ProjectsContainer id='3'> 
            <FontAwesomeIcon icon={faChevronLeft} onClick={handleBackClick}/>
            <div className='pj-container'>
                {transitions.map( ({item, props, key}) => {
                    const Slide = slides[item]
                    return <Slide key={key} style={props}/>
                })}
            </div>
            <FontAwesomeIcon icon={faChevronRight} onClick={handleClick}/>
        </ProjectsContainer>
    )
}

export default Projects;

const ProjectsContainer = styled.section`
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center; 
    background: #f7f7f7;  
    will-change: transform, opacity;
    svg{
        font-size: 4rem; 
        color: gray;
        margin: auto 5%;
        cursor: pointer;
        :hover{color: red}
    }
    .pj-container{
        margin: auto;
        justify-content: center;  
        height: 80vh; 
    }
    img{
        height: 60vh;
    }
    a{ 
        font-family: 'Roboto', sans-serif;        
        transform: none;
        text-decoration: none;
        align-items: center;
        justify-content: center;
        margin: auto;
        color: black;
        :hover{color: gray}
    }
    p{max-width: 50vw;margin: auto;}
`;