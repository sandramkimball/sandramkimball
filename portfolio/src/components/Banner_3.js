import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'

//images
import homepage from '../images/tinyHomepage.png';
import icnst from '../images/icnst.jpg';
import sautidb3 from '../images/sautidb3.png';
import stylist from '../images/stylist-find.png';
import mars from '../images/mars-explor.png';
import toDo from '../images/reducer-todo.png'



const Projects = () => {    
    const projects = [
        {
            id: 1,
            index: 0,
            href: 'https://foodie-fun-app.netlify.com/?_ga=2.228749211.602302675.1567105491-253791327.1567105491',
            img: homepage,
            title: 'FOODIE FUN',
            text: 'Collaborated with a UX designer to build a marketing site for a food blog app.'
        },
        {
            id: 2, 
            index: 1,
            href: 'https://icnst-development.netlify.com/',
            img: icnst,
            title: 'CHILD NUTRITION TRACKER',
            text: 'Collaborated with a senior React developer for an application to help doctors in foreign nations log and chart health information for patients.'
        },
        {
            id: 3,
            index: 2,
            href: 'https://sauti.now.sh/',
            img: sautidb3,
            title: 'SAUTI TRADERS',
            text: 'Worked on a team of five with a non-profit organization to deliver a cross-filtration search platform for traders data collected by the organization.'
        },
        {
            id: 4,
            index: 3,
            href: 'https://stylistfind.now.sh/',
            img: stylist,
            title: 'STYLIST FIND',
            text: 'Built a Node database and React front end application designed as a professional platform for hairstylists to self promote.'
        },
        {
            id: 5,
            index: 4,
            href: 'https://reducer-todo.sandramkimball.now.sh/',
            img: toDo,
            title: 'TO DO LIST',
            text: 'A simple to do list where you can add and delete items using Redux.'
        },
        {
            id: 6,
            index: 5,
            href: null,
            img: mars,
            title: 'COMING SOON',
            text: 'Online Python/Django adventure game.'
        }
    ]
    const [project, setProject] = useState(projects[0])
    console.log(project.index)

    const handleNext = () => {
        const newIndex = project.index+1
        if(newIndex === projects.length-1){
            // setProject(projects[0])
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
                style={{'transform': `translateX(-${project.index*(100/projects.length)}%)`}}
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
    margin: 0 auto;
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
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        position: absolute;
        height: 80vh; 
        width: 90vw;
        ::-webkit-scrollbar{
            width: 0;
        }
    }
`;