import React from 'react';
import styled from 'styled-components';
import profile_bw from '../images/profile-bw.jpg';
import Skills from './Skills';

const LeftBar = () => {
    return (
        <Sec1>
            <div className='pic-title'>
                <img src={profile_bw} alt='girl, a web developer'/>
            </div>
            <div className='skills-container'>
                <h6>NAME</h6>
                <p>Sandra Kimball</p>
                <h6>OCCUPATION</h6>
                <p>Full Stack Web Developer</p>
                <h6>LOCATION</h6>
                <p>North San Diego, Ca</p>
                <h6>TECH SKILLS</h6>
                <Skills/>
                <h6>CONNECT</h6>
                <p>Github</p>
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
    div{margin: 0 10px}
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
        p{padding: 0; margin: 0 0 15px 0}
        h6{
            font-size: 11px;
            color: gray;
            padding: 0;
            margin: 0;
        }
    }
`