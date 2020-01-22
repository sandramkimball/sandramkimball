import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Skills from './Skills';
import my_resume from '../images/Resume.pdf'

const MainPage = () =>{

    return (
        <AboutContainer id='2'>
            <h6>STATS&EXPERIENCE</h6>
            <Skills/>
            <div>               
                <button><a href={my_resume} target='_blank'>VIEW RESUME</a></button>
            </div>
        </AboutContainer>
    )
}

export default MainPage;

const AboutContainer = styled.section`
    background: #000;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    height: 60vh;
    padding: 11px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h6{text-align: left; margin-left: 4%}
    a{text-decoration: none; color: #000}
    button{
        margin: 11px;
        background: #eeeeef;
        padding: 15px 10px;
        border: none;
        font-size: 1rem;
    }
    button:hover{
        color: #fff;
        background: red;
        cursor: pointer;
    }
   

`;

  