import React from 'react';
import styled from 'styled-components';

const Contact = (handleClose) => {

    return (
        <Banner>
            <FormContainer>
                <div>
                    <button onClick={handleClose} className='close_button'>X</button> 
                    <h3>Talk to Me</h3>
                </div>
                <div>
                    <form id='contact-form' method='post' action='contact-form.php'>
                        <input 
                            name='name'
                            class='name'
                            type="text" 
                            placeholder='Name'
                        />
                        <input 
                            name='email'
                            class='email'
                            type="text" 
                            placeholder='Email'
                        />
                        <textarea name='message' class='message' row='4' placeholder='Message'></textarea>
                        <button type='submit' class='submit' value='submit-message'>Send</button>
                    </form>
                </div>  
            </FormContainer>
        </Banner>
    )
}

export default Contact;

const Banner = styled.section`
    width: 100vw;
    height: 100vh;
    background: #000000b4;
    position: fixed;
    left: 0;  
    top: 0; 
    z-index: 20;
    margin: auto;      
    text-align: left;
    h3{
        text-align: center;
        color: #fff;
        margin: 0;
        padding: 0;
    }
    h1{
        margin-bottom: 2.5%;
        font-size: 3rem;            
        color: gray;
        font-family: 'Raleway', sans-serif;
    }
    
}`
const FormContainer = styled.div`
    width: 40vw;
    background: #857c6a;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 25%;
    div{margin: 0 auto}
    form{
        margin: 0 auto;
        margin-top: -50px;
        padding: 0;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.25rem;
        input{
            margin: 10px auto;
            color: gray;
            width: 100%;
            height: 30px;
            border: none;
            background-color: #f7f1e4;
        }
        textarea{
            margin: 10px 0;
            height: 70px;
            border: none;
            background-color: #f7f1e4;
            font-family: sans-serif;
        }
        button{
            padding: 10px
            font-size: 1rem;
            border: 1px solid #f7f1e4;
            text-align: center;
            margin: 10px auto;
        }
        
    }
`;