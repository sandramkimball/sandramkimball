import React from 'react';
import styled from 'styled-components';
import Skills from './Skills';
import my_resume from '../images/Resume.pdf'

const MainPage = () =>{

    return (
        <AboutContainer id='2' className='banner-2'>
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
    width: 100%;
    height: 80vh;
    padding: 11px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    a{text-decoration: none; color: #000}
    button{
        margin: 11px;
        background: #eeeeef;
        padding: 15px 10px;
        border: none;
        font-size: 1rem;
        cursor: pointer;
    }
    button:hover{
        background-color: red;
        a{color: #eeeeeef}
    }
   

`;

  