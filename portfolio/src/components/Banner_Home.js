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
        <animated.div style={props}>
            <Home>
                <h1>SANDRA KIMBALL</h1>
                <h3>Full Stack Web Developer</h3>
            </Home>
        </animated.div>
    )
}

const Home = styled.div`
    height: 100vh;
    background-color: #eeeeef;
    margin: 0;
    h1{font-size: 6rem; margin-left: 20%; padding-top: 25vh; text-align: left;}
    h3{font-size: 3rem; padding: 0; margin-right: 20%; text-align: right}
`;

export default HomeBanner;