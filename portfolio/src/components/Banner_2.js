import React from 'react';
import styled from 'styled-components';
import Skills from './Skills';

const MainPage = () =>{

    return (
        <AboutContainer id='2' className='banner-2'>
            <Skills/>
        </AboutContainer>
    )
}

export default MainPage;

const AboutContainer = styled.section`
    background: #000;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    padding: 5vh 0;
    display: flex;
    flex-direction: column;
    justify-content: center;

`;

  