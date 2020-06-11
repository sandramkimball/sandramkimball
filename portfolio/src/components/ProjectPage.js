import React, {useState} from 'react';
import styled from 'styled-components';
import Card from './Card'
import projects from './Projects'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectsPage = () => {     
    const [bigProj, setBigProj] = useState(projects[2])

    function handleClick(obj) {
        setBigProj(obj)
    }
    
    return (
        <ProjectsContainer id='3'> 
            <section className='pj-big'>
                <img src={bigProj.img}/> 
                <a href={bigProj.href} target="_blank">  
                    <div>
                        <h2>{bigProj.title}</h2>
                        <p className='stack'>{bigProj.stack}</p>
                        <p>{bigProj.text}</p>
                    </div>
                    <div className='git-link'>                
                    {bigProj.f_url !== null && (
                        <a href={bigProj.f_url} target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                            <h5>FE</h5>
                        </a>
                    )}
                    
                    {bigProj.b_url !== null && (<a href={bigProj.b_url} target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        <h5>BE</h5>
                    </a>)}
                </div>
                </a>
                
            </section>

            <section className='pj-container' data-testid='pj-container' >
                {projects.map( obj => 
                    <span onClick={ () => handleClick(obj)} >
                        <Card 
                            key={obj.id} 
                            obj={obj} 
                        /> 
                    </span>
                )}
            </section>
        </ProjectsContainer>
    )
}

export default ProjectsPage;

const ProjectsContainer = styled.section`
    height: 100%;
    margin-top: 5vh;
    padding: 2vh 0;
    background: #e7e7e7;  
    a{ 
        font-family: 'Roboto', sans-serif;        
        color: #000;
        align-items: center;
        justify-content: center;
        margin: auto;
        :hover{color: #007bff}
    }    
    span{
        height: 100%;
        padding: 10px 0;
    }

    .pj-container{
        margin: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; 
        height: 100%; 
        width: 65vw;
        justify-content: space-between; 
    }

    .pj-big{
        width: 65vw;
        height: 45vh;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        background: #fff;
        margin: 5vh auto;
        padding: 2vh;
        img{
            height: 40vh;
            width: 50%;
            object-fit: cover;
        }
        div{
            text-align: left;
            width: 90%;
            margin: auto;
        }
        .git-link{
            display: flex;
            h5{
                font-size: 1rem; 
                color: gray;
                margin: 0;
            }
            svg{
                font-size: 1.5rem;
                color: gray;
                padding: 0 2px;
                margin: 0;
            }
            a{
                display: flex;
                align-content: center;
                margin: 0 5px;
            }
            a:hover{
                svg, h5{background: none; color: #007bff}
                
        }
    }
`;