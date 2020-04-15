import React, {useState} from 'react';
import styled from 'styled-components';

const Contact = ({status, setStatus}) => {
    const [state, setState] = useState({
        senderName: '',
        senderEmail: '',
        message: '',
    })
    const closeEmail = e => {
        e.preventDefault()
        setStatus('none')
    }
    const handleChange = e => {
        e.preventDefault()
        setState({[e.target.name]: e.target.value})
    }

    return (
        <Banner style={{'display': `${status}`}}>
            <h3>Contact Sandy</h3>
            <div>
                <form id='contact-form' method='post' action='contact-form.php'>
                    <input 
                        name='senderName'
                        value='senderName'
                        type="text" 
                        placeholder='Your Name'
                        onChange={handleChange}
                    />
                    <input 
                        name='senderName'
                        type="text" 
                        placeholder='Your Email'
                        onChange={handleChange}
                    />
                    <textarea 
                        name='message' 
                        rows='10' 
                        placeholder='Message'
                        onChange={handleChange}>    
                    </textarea>
                    <div>
                        <button type='submit' class='submit' value='submit-message'>Send</button>
                        <button onClick={closeEmail} >Cancel</button> 
                    </div>
                </form>
            </div>  
        </Banner>
    )
}

export default Contact;

const Banner = styled.section`
    width: 40vw;
    margin: auto;
    background: #f5f5f5;
    position: fixed;
    top: 20%;
    font-size: 1rem;
    z-index: 20;    
    box-shadow: 0px 4px 25px black;
    display: flex;
    flex-direction: column;
    h3{
        text-align: center;
        color: #000;
    }        
    input{
        margin: 10px auto;
        width: 90%;
        height: 30px;
        border: none;
        background-color: #fff;
    }
    textarea{
        margin: 10px 0;
        width: 90%;
        border: none;
        background-color: #fff;
        font-family: sans-serif;
    }
    button{
        margin: 10px 5px;
        border: none;
        padding: 10px 20px;
        background: #000;
        color: #fff;
        cursor: pointer;
        :hover{
            background: #fff;
            color: #000
        }
    } 

`
