import Styled from 'styled-components'
import React from 'react'
const Card = (props) => {
    return (
        <Proj className='proj-card'>
            <div className='top'>
                <img src={props.obj.img}/> 
                <a href={props.obj.href} target="_blank"><h2>{props.obj.title}</h2></a>
                    {/* <p className='stack'>{props.obj.stack}</p>
                    <p>{props.obj.text}</p> */}
            </div>
        </Proj>
    )
}

export default Card

const Proj = Styled.div`
    margin: 2vw;
    transition: opacity 300ms linear;
    position: relative;
    background: #f5f5f5;
    box-shadow: 0px 3px 5px gray;
    height: 100%;
    cursor: pointer;
    h2{ 
        font-size: 1.2rem; 
        margin: auto;
        padding: 2px 0; 
    };
    :hover{
        transform: scale(1.005);
        h2, p, svg, h5{color: gray}
    }
    .top{
        .stack{
            color: gray;
            font-style: italic;
        }
        img{
            height: 25vh;
            width: 40vh;
            object-fit: cover;
        }
        p{
            max-width: 45vh;
            margin: auto;
            font-size: 1rem;
            text-align: left;
            padding: 5px;
        }
        a{ 
            font-family: 'Roboto', sans-serif;        
            transform: none;
            text-decoration: none;
            align-items: center;
            justify-content: center;
            margin: auto;
            color: #000;
        }
    }
`;