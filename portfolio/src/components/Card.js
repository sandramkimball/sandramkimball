import Styled from 'styled-components'
import React from 'react'
import { fab, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = (props) => {
    return (
        <Proj className='proj-card'>
            <div className='top'>
                <a href={props.obj.href} target="_blank">  
                    <img src={props.obj.img}/> 
                    <h2>{props.obj.title}</h2>
                    <p className='stack'>{props.obj.stack}</p>
                    <p>{props.obj.text}</p>
                </a>
            </div>
            <div className='git-link'>                
                {props.obj.f_url !== null && (
                    <a href={props.obj.f_url} target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        <h7>FE</h7>
                    </a>
                )}
                
                {props.obj.b_url !== null && (<a href={props.obj.b_url} target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                    <h7>BE</h7>
                </a>)}
            </div>
        </Proj>
    )
}

export default Card

const Proj = Styled.div`
    margin: 15vh 2vw 0 2vw;
    transition: opacity 300ms linear;
    position: relative;
    background: #f5f5f5;
    box-shadow: 0px 3px 5px gray;
    height: 60vh;
    cursor: pointer;
    :hover{
        transform: scale(1.025);
        h2, p, svg, h7{color: gray}
    }
    .top{
        .stack{
            color: gray;
            font-style: italic;
        }
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
    
    .git-link{
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 0
        h7{font-size: 1rem; color: gray}
        svg{
            font-size: 1.5rem;
            color: gray;
            height: 2rem;
            position: inherit;
            margin: 0;
            padding: 0 2px;
        }
        a{
            display: flex;
            flex-direction: row;
            align-content: center;
            margin: 10px 5px;
        }
        a:hover{
            svg, h7{background: none; color: red}
            
    }
`;