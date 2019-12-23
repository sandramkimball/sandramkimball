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
    height: 90vh;
    width: 30vw;
    overflow: no scroll;
    div{
        height: 100%;
        width: 100%;
        align-content: center;
        align-items: center;
        margin: 0 auto;
        justify-content: center;
        display: flex;
        flex-direction: column;
        img{
            width: 80%;
            height: 75%;
            object-fit: cover;
            object-position: top;
            margin: 0 auto;
            margin-top: -25px;
        }    
        h1{
            font-size: 2.75rem;
            font-weight: 650;
            color: #060569;
            font-family: 'Raleway', sans-serif;
            margin: 0 auto;
        }
        h2{
            font-size: 1.75rem;
            color: #060569;
            font-family: 'Raleway', sans-serif;
            margin: 0 auto;
        }
}`