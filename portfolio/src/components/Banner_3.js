import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
import projects from './ProjectSlides'

const Projects = () => {    
    const [project, setProject] = useState(projects[0])
    console.log(project.index)

    const handleNext = () => {
        const newIndex = project.index+1
        if(newIndex === projects.length-1){
            return
        } else {            
            setProject(projects[newIndex])
        }
    }

    const handleBack = () => {
        const newIndex = project.index-1
        if(project.index === 0){
            return
        } else {            
            setProject(projects[newIndex])
        }
    }
    
    return (
        <ProjectsContainer id='3' className={`banner-3`}> 
            <FontAwesomeIcon icon={faChevronLeft} onClick={handleBack} className='left'/>
            <div className='pj-container' 
                style={{'transform': `translateX(-${project.index*(100/projects.length)+5}%)`}}
            >
                {projects.map(obj=> <Card key={obj.id} obj={obj}/> )}
            </div>
            <FontAwesomeIcon icon={faChevronRight} onClick={()=> handleNext()} className='right'/>
        </ProjectsContainer>
    )
}

export default Projects;

const ProjectsContainer = styled.section`
    width: 100%;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: row;   
    justify-content: center; 
    background: #e7e7e7;  
    position: relative;
    overflow-x: hidden; 
    transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
    svg{
        font-size: 4rem; 
        color: gray;
        padding: 0 20px;
        cursor: pointer;
        z-index: 10;
        height: 100vh;
        position: absolute;
        :hover{color: #fff; background: #22222250}
    }
    .right{
        right: 0
    }
    .left{
        left: 0
    }
    a{ 
        font-family: 'Roboto', sans-serif;        
        transform: none;
        text-decoration: none;
        align-items: center;
        justify-content: center;
        margin: auto;
        color: black;
        :hover{color: gray}
    }    
    .pj-container{
        margin: auto;
        display: flex;
        flex-direction: row;
        position: absolute;
        height: 100%; 
        width: 90vw;
        ::-webkit-scrollbar{
            width: 0;
        }
    }
`;