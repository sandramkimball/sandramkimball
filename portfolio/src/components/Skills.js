import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faNode, faCss3Alt, faHtml5, faReact, faJs, faPython } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';
import {useTransition, animated} from 'react-spring'


const Skills  = () => {
    const [items, set] =setState([...])
    const transitions = useTransition(items, item => item.key, {
        from: {transform: 'translate3d(0, -40px, 0'},
        enter: {transform: 'translate3d(0, 0px, 0'},
    })

    return(
        <SkillList>
            <ul>
                <animated.li key={key} style={props}>
                    <FontAwesomeIcon icon={faHtml5} />
                    <p>HTML</p>
                </animated.li>
                <animated.li key={key} style={props}>
                    <FontAwesomeIcon icon={faCss3Alt}/>
                    <p>CSS</p>
                </animated.li>
                <animated.li key={key} style={props}>
                    <FontAwesomeIcon icon={faJs} />
                    <p>JS</p>
                </animated.li>
                <animated.li key={key} style={props}>
                    <FontAwesomeIcon icon={faReact} />
                    <p>REACTJS</p>
                </animated.li>   
                <animated.li key={key} style={props}>
                    <FontAwesomeIcon icon={faNode} />
                    <p>NODE</p>
                </animated.li>
                <animated.li key={key} style={props}>
                    <FontAwesomeIcon icon={faDatabase} />
                    <p>SQL</p>
                </animated.li>
                <animated.li key={key} style={props}>
                    <FontAwesomeIcon icon={faServer} />
                    <p>GRAPHQL</p>
                </animated.li>
                <animated.li key={key} style={props}>
                    <FontAwesomeIcon icon={faPython} />
                    <p>PYTHON</p>
                </animated.li>
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