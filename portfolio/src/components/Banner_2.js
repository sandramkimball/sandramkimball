import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Contact from './Contact';
import styled from 'styled-components';

const MainPage =()=>{
    const [showContact, setShowContact] = useState(false || true);
    const showHideClassName = showContact ? "contact display-open" : "contact display-none";

    const handleClick = e => {
        e.preventDefault();
        setShowContact(true);
    };
    const handleClose = e => {
        e.preventDefault();
        setShowContact(false);
    };

    return (
        <AboutContainer id='mainpage'>
            <div>
                <h2>About Me</h2>
                <p>From preschool teaching to coding.</p>
                <button onClick={handleClick}>CONTACT</button>
            </div>
            <div className={showHideClassName} >
                {/* <Contact handleClose={handleClose}/> */}
            </div>
            
        </AboutContainer>
    )
}

export default MainPage;

const AboutContainer = styled.section`
    margin: auto;
    background: #000;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    height: 60vh;
    padding: 5px 0;    
    overflow: hidden;
    button{
        background: none;
        padding: 15px;
        color: #eeeeef;
        border: 1px solid #eeeef;
        font-size: 1rem;
    }
    button:hover{
        color: #fff;
        cursor: pointer;;
    }

`;

  