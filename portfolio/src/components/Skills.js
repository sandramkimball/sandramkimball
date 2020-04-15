import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faNode, faCss3Alt,  faSass, faHtml5, faReact, faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faFileCode, faCodeBranch, faServer } from '@fortawesome/free-solid-svg-icons';


const funds = [
    {f_icon: faHtml5, name:'HTML5'},
    {f_icon: faCss3Alt, name:'CSS3'},
    {f_icon: faJs, name:'JAVASCRIPT'},
    {f_icon: faPython, name:'PYTHON'},
    {f_icon: faFileCode, name:'JEST'},
]
const FE = [
    {f_icon: faReact, name:'REACTJS'},
    {f_icon: faReact, name:'REACT HOOKS'},
    {f_icon: faReact, name:'REDUX'},
    {f_icon: faSass, name:'SASS'},
    {f_icon: faFileCode, name:'BOOTSTRAP'},
    {f_icon: faFileCode, name:'JEST'},
    {f_icon: faReact, name:'REACT-TESTING-LIBRARY'},
]
const BE = [
    {f_icon: faNode, name:'NODEJS'},
    {f_icon: faNode, name:'EXPRESS'},
    {f_icon: faDatabase, name:'SQL'},
    {f_icon: faFileCode, name:'DJANGO'},
    {f_icon: faServer, name:'GRAPHQL'},
    {f_icon: faFileCode, name:'KNEX'},
    {f_icon: faFileCode, name:'SUPER TEST'},
]


const Skills  = () => {

    return(
        <SkillList className='tech-stack'>
            <div>
                <h6>FUNDAMENTALS</h6>
                <ul>
                {funds.map( item => (
                    <li>
                        <FontAwesomeIcon icon={item.f_icon}/>
                        <p>{item.name}</p>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h6>FRONT-END</h6>
                <ul>
                {FE.map( item => (
                    <li>
                        <FontAwesomeIcon icon={item.f_icon}/>
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
                        <FontAwesomeIcon icon={item.f_icon}/>
                        <p>{item.name}</p>
                    </li>
                ))}
                </ul>
            </div> 
        </SkillList>
)}

export default Skills;

const SkillList = styled.div`
    margin: 5px auto;
    width: 90%;
    display: flex;    
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    h6{
        font-size: 1rem; 
        margin: 3vh 0 1vh 0 
    }
    ul{
        margin: auto;
        padding:0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        li{ 
            width: 10%;
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #101010eb;
            border-radius: 4px;
            padding: 30px 0;
            margin: 4px;
            p{
                padding: 0; 
                margin: 0;
                font-size: 1.25rem
            }
            svg{
                font-size: 3rem; 
                padding-bottom: 5px
            }
            img{
                height: 3rem;
                padding-bottom: 5px;
                color: black
            }
        }    
    }
   
`

