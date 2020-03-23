import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faNode, faCss3Alt, faHtml5, faReact, faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import {useTransition, animated} from 'react-spring'

const skills = [
    {f_icon: faHtml5, name:'HTML'},
    {f_icon: faCss3Alt, name:'CSS'},
    {f_icon: faJs, name:'JS'},
    {f_icon: faReact, name:'REACTJS'},
    {f_icon: faNode, name:'NODE'},
    {f_icon: faDatabase, name:'SQL'},
    {f_icon: faServer, name:'GRAPHQL'},
    {f_icon: faPython, name:'PYTHON'},
]

const Skills  = () => {
    const [items, set] = useState(skills)

    const transitions = useTransition(items, item => item.name, {
        immediate: false,
        from: { transform: 'translate3d(0,-40px,0)', opacity: 0 },
        enter: {transform: 'translate3d(0,0px,0)', opacity: 1},
        
    })

// onFrame: frame => {( {enter: {transform: 'translate3d(0,0px,0)', opacity: 1} } )}

    return(
        <SkillList>
            <ul>
            {transitions.map( ({ item, key, props }) => (
                <animated.li key={key} style={props}> 
                    <FontAwesomeIcon icon={item.f_icon}/>
                    <p>{item.name}</p>
                </animated.li>
            ))}
            </ul>
        </SkillList>
)}

export default Skills;

const SkillList = styled.div`
    margin: 5px auto;
    padding: 0 0 11px 0;
    width: 90%;
    display: flex;    
    flex-direction: column;
    justify-content: center;
    ul{
        margin: 0;
        padding:0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        justify-content: center;
        li{ 
            width: 20%;
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            p{padding: 0; margin: 0; font-size: 1.75rem}
            svg{font-size: 6rem; padding-bottom: 5px}
            background-color: #101010eb;
            border-radius: 4px;
            padding: 4px 0;
            margin: 4px;
        }    
    }
    @media only screen and(max-width: 1050px){
        ul{
            flex-wrap: wrap;
            color: red;
            li{
                color: red;

            }
        }
    }
`

