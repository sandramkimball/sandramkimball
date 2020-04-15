import React, {useState} from 'react';
import styled from 'styled-components';
import profile_bw from '../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Contact from './Contact';

const Banner_1 = () => {
    const[status, setStatus] = useState('none');
    const openEmail = e => {
        e.preventDefault();
        setStatus('inherit')
    }

    return (
        <Banner id='1' className='banner-1'>
            <Contact status={status} setStatus={setStatus}/>
            <div className='pic-title'>
                <img src={profile_bw} alt='a girl smiling'/>
            </div>
            <div className='skills-container'>
                <h6>NAME</h6>
                <p>Sandra Kimball</p>
                <h6>TITLE</h6>
                <p>Full Stack Web Developer</p>
                <h6>SCHOOL</h6>
                <p>Lambda School</p>
                <h6>LOCATION</h6>
                <p>San Diego, Ca - North County</p>
                <h6>BIO</h6>
                <p>A socal native, I started as a preschool teacher where I spent three years educating, leading, and inspiring others before making the change to a career in tech.</p>
                <h6>CONNECT</h6>
                <div className = 'connect-links'>
                    <a href="https://www.linkedin.com/in/sandy-kimball-9b7461192/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <p>LinkedIn</p>
                    </a>
                    <a href="https://github.com/sandramkimball?tab=repositories" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        <p>Github</p>
                    </a>
                </div>
            </div>
        </Banner>
    )
}

export default Banner_1;

const Banner = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    height: 100vh;
    width: 90%;
    .pic-title{    
        width: 20%;
        img{
            width: 100%;
            height: 60vh;
            object-fit: cover;
            object-position: top;
        }    
    }
    .skills-container{
        text-align: left;
        width: 20%;
        margin-left: 10px
        p{padding: 0; margin: 0 0 15px 0}
        h6{
            font-size: 1rem;
            color: gray;
            padding: 0;
            margin: 0;
        }
    }
    .connect-links {
        display: flex;
        a{
            color: #000;
            margin: 11px 11px 0 0;
            text-decoration: none;
            align-items: center;
            display: flex;
            flex-direction: column;
            cursor: pointer;
            :hover{color: red}
        };
        svg{font-size: 1.125rem}
    }
    .contact-open{
        display: inherit;
    }
    .contact-close{
        display: hidden;
    }
`