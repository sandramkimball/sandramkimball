import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Skills from './Skills';

const MainPage = () =>{

    return (
        <AboutContainer id='2'>
            <h6>STATS&EXPERIENCE</h6>
            <Skills/>
            <div>               
                <button>VIEW RESUME</button>
                <button>VIEW RESUME</button>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h6{text-align: left; margin-left: 4%}
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

  