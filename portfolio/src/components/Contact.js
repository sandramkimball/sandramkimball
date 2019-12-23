import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Banner>
            <FormContainer>
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
                
            </FormContainer>
        </Banner>
    )
}

export default Contact;

const Banner = styled.section`
    width: 95%;
    margin: 0 auto;    
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: left;
    position: initial;
    h1{
        margin-bottom: 2.5%;
        font-size: 3rem;            
        color: gray;
        font-family: 'Raleway', sans-serif;
    }
    form{
        margin: 0 auto;
        padding: 20px 0;
        width: 45%;
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
            width: 100px;
            height: 30px;
            font-size: 1rem;
            background: #f7f1e4;
            border: none;
            text-align: center;
            margin: 10px auto;
        }
        button:hover{
            background-color: #f7f1e4;
            cursor: pointer;
        }
    }
}`
const FormContainer = styled.div`.form-container{
    width: 70vw;
    height: 40vh;
    margin-left: -4vw;
    background-color: #c4b79b;
    display: flex;
    justify-content: center;

}`;