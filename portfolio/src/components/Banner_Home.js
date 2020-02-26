import React from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

const HomeBanner = () => {

    // const props = useSpring({
    //     from: {width: 0},
    //     to: {width}
    // })
    return (
        <Home>
            <h1>SANDRA KIMBALL</h1>
            <h3>Full Stack Web Developer</h3>
        </Home>
    )
}

const Home = styled.div`
    height: 100vh;
    background-color: #eeeeef;
    margin: auto;
    padding: 0 4%;
    h1{font-size: 6rem; margin: 0 0 0 10vw; padding-top: 30vh; text-align: left;}
    h3{font-size: 3rem; padding: 0; margin: 0 10vw 0 0; text-align: right}
`;

export default HomeBanner;