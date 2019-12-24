import React from 'react';
import styled from 'styled-components';
import profile_bw from '../images/profile-bw.jpg';

const LeftBar = () => {
    return (
        <Banner>
            <div>
                <img src={profile_bw} alt='black&white profile of a girl smiling'/>
                <h1>SANDRA KIMBALL</h1>
                <h2>Full Stack Web Developer</h2>
            </div>
            <script>
                {/* let homebase = document.querySelectorAll('.banner div');
                TweenLite.from(homebase, 4, {opacity: 0, x: -50}); */}
            </script>
        </Banner>
    )
}

export default LeftBar;

const Banner = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 30vw;
    background: url('https://images.unsplash.com/photo-1543751416-705d3e34d02a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');
    div{
        height: 100%;
        width: 100%;
        margin: 0 auto;
        justify-content: center;
        display: flex;
        flex-direction: column;
        text-align: left;
        font-family: 'Raleway', sans-serif;
        color: #fff;
        img{
            width: 25vw;
            height: 60vh;
            object-fit: cover;
            object-position: top;
            margin: 0 auto;
            margin-top: -5vh;
        }    
        h1, h2{
            font-size: 1.75rem;
            width: 25vw;
            margin: 0 auto;
        }
}`