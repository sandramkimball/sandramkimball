import React from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub, faLinkedin, } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, } from '@fortawesome/free-solid-svg-icons';
import my_resume from '../images/Resume.pdf'

const Banner_0 = () => {
    const props = useSpring({
        from: {opacity: 0},
        to: async(next, cancel) => {
            await next({opacity: 1}, 2000)
        },
    })

    return (
        <Home className='home-banner'>
            <animated.div style={props}>
                <h1>SANDRA KIMBALL</h1>
                <h3>Full Stack Web Developer</h3>
                
                <div className = 'connect-links'>
                    <a href="https://www.linkedin.com/in/sandy-kimball/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <p>LinkedIn</p>
                    </a>
                    <a href="https://github.com/sandramkimball" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        <p>Github</p>
                    </a>
                    
                    <a href={my_resume} target="_blank">
                        <FontAwesomeIcon icon={faFileAlt} />
                        <p>Resume</p>
                    </a>
                </div>
            </animated.div> 
        </Home>
    )
}

const Home = styled.div`
    height: 100vh;
    background-color: #eeeeef;
    margin: auto;
    text-align: center;
    h1{
        font-size: 6rem; 
        margin: 0 auto; 
        padding-top: 25vh; 
    }
    h3{font-size: 3rem; padding: 0;}
    
    .connect-links {
        display: flex;
        justify-content: center;
        margin-top: 20vh;
        a{
            font-size: 1.25rem
            color: gray;
            margin: 0 1rem;
            text-decoration: none;
            align-items: center;
            display: flex;
            flex-direction: column;
            :hover{color: red}
        };
        svg{font-size: 2rem}
`;

export default Banner_0;  