import Styled from 'styled-components'
import React from 'react'


const Card = (props) => {
    return (
        <Proj className='proj-card'>
            <a href={props.obj.href} target="_blank">  
                <img src={props.obj.img}/> 
                <h2>{props.obj.title}</h2>
                <p className='stack'>{props.obj.stack}</p>
                <p>{props.obj.text}</p>
            </a>
        </Proj>
    )
}

export default Card

const Proj = Styled.div`
    margin: 15vh 2vw 0 2vw;
    transition: opacity 300ms linear;
    img{
        height: 30vh;
        width: 45vh;
        object-fit: cover;
    }
    p{
        max-width: 45vh;
        margin: auto;
        font-size: 1rem;
        text-align: left;
    }
    a{ 
        font-family: 'Roboto', sans-serif;        
        transform: none;
        text-decoration: none;
        align-items: center;
        justify-content: center;
        margin: auto;
        color: black;
        :hover{color: gray}
    }
    .stack{
        color: gray;
        font-style: italic;
    }
`;