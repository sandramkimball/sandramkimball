import React from 'react';
import styled from 'styled-components';

const Skills  = () => {
    return(
        <SkillList>
            <div>
                <h2>Front End</h2>
                <ul>
                    <li>
                        <i class="fab fa-html5"></i>
                        <p>HTML</p>
                    </li>
                    <li>
                        <i class="fab fa-less"></i>
                        <p>CSS & LESS</p>
                    </li>
                    <li>
                        <i class="fab fa-js-square"></i>
                        <p>Javascript</p>
                    </li>
                    <li>
                        <i class="fab fa-react"></i>
                        <p>ReactJS</p>
                    </li>
                </ul>
            </div>

            <div>
                <h2>Back End</h2>
                <ul>
                    <li>Node</li>
                    <li>MySql</li>
                    <li>Sqlite3</li>
                    <li>GraphQL</li>
                </ul>
            </div>

            <script>
                {/* let pg2 = document.querySelectorAll('#pg2');
                TweenLite.from(pg2, 4, {opacity: 0, x: 50}); */}
            </script>
        </SkillList>
)}

export default Skills;

const SkillList = styled.section`
    // height: 40vh;
    margin: 0 auto;
    width: 80%;
    display: flex;    
    justify-content: center;
    background-color: #403226;
    ul{
        margin: 0 auto;
        // display: flex;
        // flex-direction: row;
        // flex-wrap: wrap;
        font-size: 1rem
        li{ 
            width: 100px;
            text-align: left;
            margin: 0;
            list-style: none;
            // display: flex;
            // flex-direction: column;
            // align-items: center;
            // justify-content: center;
            color: #f7f1e4;
        }    
}`