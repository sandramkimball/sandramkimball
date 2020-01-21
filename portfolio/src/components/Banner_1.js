import React from 'react';
import styled from 'styled-components';
import profile_bw from '../images/profile-bw.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

const LeftBar = () => {
    return (
        <Sec1 id='1'>
            <div className='pic-title'>
                <img src={profile_bw} alt='girl, a web developer'/>
            </div>
            <div className='skills-container'>
                <h6>NAME</h6>
                <p>Sandra Kimball</p>
                <h6>TITLE</h6>
                <p>Full Stack Web Developer</p>
                <h6>SCHOOL</h6>
                <p>Lambda School</p>
                <h6>LOCATION</h6>
                <p>North San Diego, Ca</p>
                <h6>CONNECT</h6>
                <div className = 'connect-links'>
                    <a href="https://www.linkedin.com/in/sandy-kimball-9b7461192/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <p>LinkedIn</p>
                    </a>
                    <a href="https://github.com/sandramkimball?tab=repositories" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        <p>Github</p>
                    </a>
                </div>
            </div>
            <script>
                {/* let homebase = document.querySelectorAll('.banner div');
                TweenLite.from(homebase, 4, {opacity: 0, x: -50}); */}
            </script>
        </Sec1>
    )
}

export default LeftBar;

const Sec1 = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 100vh;
    width: 70vw;
    .pic-title{    
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;    
        img{
            width: 20vw;
            height: 60vh;
            object-fit: cover;
            object-position: top;
        }
        h1, h2{
            text-align: left;
            font-family: 'Roboto', sans-serif; 
            font-size: 1.75rem;
            margin: 0 auto;
        }       
    }
    .skills-container{
        text-align: left;
        margin-left: 10px
        p{padding: 0; margin: 0 0 15px 0}
        h6{
            font-size: 11px;
            color: gray;
            padding: 0;
            margin: 0;
        }
    }
    .connect-links {
        display: flex;
        a{
            color: #000;
            margin: 11px 11px 0 0;
            text-decoration: none;
            align-items: center;
            display: flex;
            flex-direction: column;
            :hover{color: red}
        };
        svg{font-size: 1.125rem}
    }
`