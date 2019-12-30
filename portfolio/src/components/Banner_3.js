import React from 'react';
import styled from 'styled-components';

//images
import homepage from '../images/tinyHomepage.png';
import icnst from '../images/icnst.png';
import reducer_todo from '../images/reducer-todo.png';
import stylist from '../images/stylist-find.png';

const Projects = () => {
    return (
        <ProjectsContainer>
            <div class='projects-container'>
            <h6>PROJECTS</h6>
                <Project>
                    <a href='https://foodie-fun-app.netlify.com/?_ga=2.228749211.602302675.1567105491-253791327.1567105491' target="_blank">
                        <img src={homepage}/>
                        <div>
                            <h2>Foodie Fun UI</h2>
                            <p>Collaborated with a UX designer to build a marketing site for a food blog app.</p>
                        </div>
                    </a>
                </Project>

                <Project>
                    <a href='https://icnst-development.netlify.com/' target="_blank">
                        <img src={icnst}/>
                        <div>
                            <h2>Child Nutrition Tracker</h2>
                            <p>Worked in collab with a senior React developer to build half the components, forms and routes to an application designed to help volunteer doctors in foreign nations to log and chart health information for patients.</p>
                        </div>
                    </a>
                </Project>

                <Project>
                    <a href='https://reducer-todo.sandramkimball.now.sh' target="_blank">
                        <img src={reducer_todo}/>
                        <div>
                            <h2>Reducer Todo List</h2>
                            <p>A pactice using reducers to set stat and actions.</p>
                        </div>
                    </a>
                </Project>

                <Project>
                    <a target="_blank">
                        <img src={stylist}/>
                        <div>
                            <h2>Coming Soon</h2>
                            <p>Built a SQL database, populated it with dummy data, and used it in a front end application designed as a professional platform for hairstylists to self promote.</p>
                        </div>
                    </a>
                </Project>
            </div>
                
            <script>
                {/* let pg3 = document.querySelectorAll('#pg3');
                TweenLite.from(pg3, 4, {opacity: 0, x: 50}); */}
            </script>
        </ProjectsContainer>
    )
}

export default Projects;

const ProjectsContainer = styled.section`
    width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .projects-container{
        margin: 100px 0;
        display: flex; 
        flex-direction: column;
        justify-content: center;        
    }
`;

const Project = styled.div`
    margin: 0 auto;
    height: 175px;
    width: 100%;
    padding: 5px;
    background: #f9f9fb;
    border-top: 1px solid #eeeeef;
    border-bottom: 1px solid #eeeeef;
    display: flex;
    a{ 
        font-family: 'Roboto', sans-serif;        
        transform: none;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            height: 100%;
            width: 20%;
            object-fit: cover;
            object-position: top;
            margin-right: 10px;
        }
        div{
            width: 40%;
            color: gray;
            h2{
                font-size: 1.25rem;
                padding: 0;
                margin: 0;
                text-align: left;
            }
            p{
                font-size: 1rem;
                text-align: left;
                padding: 0 5px 0 0;
                margin: 0;
            }
        }
    }
    :hover{
        h2, p{color: #000;}
        box-shadow: 0px 0px 20px gray;
        z-index: 5;
    }
`;