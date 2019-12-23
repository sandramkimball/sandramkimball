import React from 'react';
import styled from 'styled-components';

const Skills  = () => {
    return(
        <SkillList>
            <ul>
                <a>
                    <i class="fab fa-html5"></i>
                    <h3>HTML</h3>
                </a>
                <a>
                    <i class="fab fa-less"></i>
                    <h3>CSS & LESS</h3>
                </a>
                <a>
                    <i class="fab fa-js-square"></i>
                    <h3>Javascript</h3>
                </a>
                <a>
                    <i class="fab fa-react"></i>
                    <h3>ReactJS</h3>
                </a>
                <a>
                    <i class="fab fa-node-js"></i>
                    <h3>Node</h3>
                </a>
                <a>
                    <i class="fas fa-database"></i>
                    <h3>Sqlite3</h3>
                </a>
            </ul>
            <script>
                {/* let pg2 = document.querySelectorAll('#pg2');
                TweenLite.from(pg2, 4, {opacity: 0, x: 50}); */}
            </script>
        </SkillList>
)}

export default Skills;

const SkillList = styled.section`
    height: 40vh;
    margin: 0 auto;
    width: 95%;
    display: flex;    
    flex-direction: column;
    justify-content: center;
    ul{
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        a{ 
            width: 150px;
            height: 150px;
            margin: 10px;
            font-size: 1rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            border: .5px solid green;
        }    
}`