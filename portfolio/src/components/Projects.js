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
    width: 65vw;
    height: 98vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: scroll;
    ::-webkit-scrollbar{ width: 0}
    .projects-container{
        margin: 100px 0;
        display: flex; 
        flex-direction: column;
        justify-content: center;
        
}`;

const Project = styled.div`
    margin: 10px auto;
    background: #f7f1e4;
    width: 80%;
    height: 175px;
    display: flex;
    a{ 
        color: #fff;
        transform: none;
        text-decoration: none;
        display: flex;
        align-items: center;
        img{
            height: 175px;
            width: 200px;
            object-fit: cover;
            object-position: top;
            filter: grayscale(100%);
            margin-right: 10px;
        }
        h2{
            font-size: 1.25rem;
            padding: 0;
            margin: 0;
            text-align: left;
            color: #000;
        }
        p{
            font-size: 1rem;
            text-align: left
            color: #000;
            padding: 0 5px 0 0;
            margin: 0;
        }
        :hover{
            img{filter: none;}
        }
    }
`;