import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faNode, faCss3Alt, faHtml5, faReact, faJs } from '@fortawesome/free-brands-svg-icons'
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
                    <p>Javascript</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faReact} />
                    <p>ReactJS</p>
                </li>   
                <li>
                    <FontAwesomeIcon icon={faNode} />
                    <p>Node</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faNode} />
                    <p>Express</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faDatabase} />
                    <p>SQL</p>
                </li>
                <li>
                    <FontAwesomeIcon icon={faServer} />
                    <p>GraphQL</p>
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
    margin: 0 auto;
    padding: 20px 0;
    width: 80%;
    display: flex;    
    flex-direction: column;
    justify-content: center;
    background-color: #403226;
    ul{
        margin: 0 auto;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-size: 1.5rem
        li{ 
            width: 24%;
            text-align: left;
            margin: auto;
            list-style: none;
            color: #f7f1e4;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            p{padding: 0; margin-top: 0}
        }    
}`