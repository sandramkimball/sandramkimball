import React from 'react';
import styled from 'styled-components';

const HomeBanner = () => {
    return (
        <Home>
            <div>
                <h1>SANDRA KIMBALL</h1>
                <h3>Full Stack Web Developer</h3>
            </div>
        </Home>
    )
}

const Home = styled.div`
    background-color: red;
    height: 100vh;
    color: #fff;
    padding: 0 4%;
    div{width: 70%}
    h1{font-size: 6rem; margin: 0; padding-top: 30vh; text-align: left}
    h3{font-size: 3rem; padding: 0; margin: 0; text-align: right}
`;

export default HomeBanner;