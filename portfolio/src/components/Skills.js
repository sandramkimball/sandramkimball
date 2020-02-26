import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faNode, faCss3Alt, faHtml5, faReact, faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';


const Skills  = () => {
    return(
        <SkillList>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faHtml5} />
                    <p>HTML</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCss3Alt}/>
                    <p>CSS</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faJs} />
                    <p>JS</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faReact} />
                    <p>REACTJS</p>
                </li>   
                <li>
                    <FontAwesomeIcon icon={faNode} />
                    <p>NODE</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faDatabase} />
                    <p>SQL</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faServer} />
                    <p>GRAPHQL</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faPython} />
                    <p>PYTHON</p>
                </li>
            </ul>
            <script>
                {/* let pg2 = document.querySelectorAll('#pg2');
                TweenLite.from(pg2, 4, {opacity: 0, x: 50}); */}
            </script>
        </SkillList>
)}

export default Skills;

const SkillList = styled.section`
    margin: 5px auto;
    padding: 0 0 11px 0;
    width: 60%;
    display: flex;    
    flex-direction: column;
    justify-content: center;
    h5{text-align: center; color: red}
    ul{
        margin: 0;
        padding:0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        li{ 
            width: 10%;
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            p{padding: 0; margin: 0; font-size: 1.125rem}
            svg{font-size: 4rem; padding-bottom: 5px}
            background-color: #101010eb;
            border-radius: 4px;
            padding: 4px 0;
            margin: 0 4px;
        }    
}`