import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faNode, faAngular, faCss3Alt, faEnvira, faSass, faHtml5, faReact, faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faFileCode, faServer } from '@fortawesome/free-solid-svg-icons';


const FE = [
    {f_icon: faHtml5, name:'HTML5'},
    {f_icon: faCss3Alt, name:'CSS3 / SCSS / LESS'},
    {f_icon: faJs, name:'JAVASCRIPT'},
    {f_icon: faJs, name:'TYPESCRIPT'},
    {f_icon: faReact, name:'REACT JS'},
    {f_icon: faReact, name:'REDUX'},
    {f_icon: faAngular, name:'ANGULAR JS'},
    {f_icon: faFileCode, name:'BOOTSTRAP / MATERIAL UI'},
    {f_icon: faReact, name:'REACT-TESTING'},
]
const BE = [
    {f_icon: faNode, name:'NODE JS'},
    {f_icon: faNode, name:'EXPRESS JS'},
    {f_icon: faPython, name:'PYTHON'},
    {f_icon: faDatabase, name:'SQL & NOSQL'},
    {f_icon: faFileCode, name:'DJANGO'},
    {f_icon: faServer, name:'GRAPHQL'},
    {f_icon: faEnvira, name:'MONGODB'},
    {f_icon: faFileCode, name:'JEST / MOCHA'},
]


const Skills  = () => {

    return(
        <SkillList className='tech-stack' data-testid='tech-stack'>
            <div>
                <h6>FRONT-END</h6>
                <ul>
                {FE.map( item => (
                    <li>
                        {/* <FontAwesomeIcon icon={item.f_icon}/> */}
                        <p>{item.name}</p>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h6>BACK-END</h6>
                <ul>
                {BE.map( item => (
                    <li>
                        {/* <FontAwesomeIcon icon={item.f_icon}/> */}
                        <p>{item.name}</p>
                    </li>
                ))}
                </ul>
            </div> 
        </SkillList>
)}

export default Skills;

const SkillList = styled.section`
    margin: 5px auto;
    display: flex;    
    flex-direction: row;
    justify-content: space-evenly;
    div{
        margin: 0 2vw;
        width: 30vw
    }
    h6{
        font-size: 1rem; 
        width: 90%;
        margin: 5px auto;
        padding: 15px 0;
        background-color: #101010eb;
        border-radius: 4px;
    }
    ul{
        width: 90%;
        li{  
            list-style: none;
            border-bottom: 3px solid #101010eb;
            text-align: left;
            padding: 5px 0;
            p{
                margin: 0;
                font-size: 1.25rem
            }
        }    
    }
   
`

