import React, { useState } from 'react';
import styled from 'styled-components';
import interview_1 from '../images/self-interview-values.mp4'

const Banner_3 = () =>{
    const[tab, setTab] = useState('hobbies')
    const onTabClick=(e, name)=>{
        e.preventDefault();
        setTab(name)
    }

    return(
        <Banner className='video-container'>
            <h6 className='meet-sandy'>WHO IS SANDY?</h6>
            <Video autoplay='false' controls>
                <source src={interview_1} type="video/mp4"/>
                Sorry, your browser doesn't support mp4 videos.
            </Video>
            <div className='question-container'>
                <div className='tab-bar'>
                    <h6 onClick={(e)=> onTabClick(e, 'values')} style={{"color": tab==='values' ? 'red':'gray'}}>VALUES</h6>
                    <h6 onClick={(e)=>onTabClick(e, 'hobbies')} style={{"color": tab==='hobbies' ? 'red':'gray'}}>HOBBIES</h6>
                    <h6 onClick={(e)=>onTabClick(e,'strengths')} style={{"color": tab==='strengths' ? 'red':'gray'}}>STRENGTHS+WEAKNESSES</h6>
                </div>
                {tab === 'values' && 
                    <p>"What gets me up in the morning is the simple idea of being <b>1% better than yesterday</b>. You are what you repeatedly think, and that's the life you live. Finding a way, every day, to apply myself, improve my talents, and engage my mind is what makes me happy."</p>
                }
                {tab === 'hobbies' && 
                    <p>"My hobbies reflect my values in that I love engaging myself in something <b>positive</b>. I invest a lot of time in art and langages, but also enjoy cars, gardening and MMA."</p>
                }
                {tab === 'strengths' && 
                    <p>"Strengths and weaknesses are a Ying and Yang. I am highly self-critical and committed to a fault. I will burnout, worry about the details, and under sell myself, but will always over deliver."</p>
                }
            </div>
        </Banner>
    )
}

export default Banner_3;

const Banner = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 100vh;
    width: 100%;
    background-color: #eeeeef;
    .meet-sandy{
        display: none;
    }
    .question-container{
        width: 35%;
        padding: 1em 0 1em 1em;
        text-align: left;
        h6{
            cursor: pointer;
            color: gray;
            padding: 0 10px 0 0;
            max-width: 100%;
            :hover{
                color: red;
            }
        }
        .tab-bar{
            display: flex;
            flex-direction: flex-start;
            width: 100%;
            padding: 0 0
        }
    }
`;

const Video = styled.video`
    height: 30vw;
    
`;

