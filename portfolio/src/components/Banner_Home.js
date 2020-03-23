import React from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

const HomeBanner = () => {
    const props = useSpring({
        from: {opacity: 0},
        to: async(next, cancel) => {
            await next({opacity: 1}, 2000)
        },
    })

    return (
        <Home>
            <animated.div style={props}>
                <h1>SANDRA KIMBALL</h1>
                <h3>Full Stack Web Developer</h3>
            </animated.div> 
        </Home>
    )
}

const Home = styled.div`
    height: 100vh;
    background-color: #eeeeef;
    margin: auto;
    text-align: center;
    h1{font-size: 6rem; margin: 0 auto; padding-top: 25vh; }
    h3{font-size: 3rem; padding: 0;}
    @media only screen and (max-width: 850px){
        h1{width: 80%}
        h3{font-size: 2rem}
    }
`;

export default HomeBanner;  