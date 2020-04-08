import React, {useState, useEffect} from 'react'
import Styled from 'styled-components'

const Popup=()=>{
    const[popStatus, setStatus] = useState('none')

    const handleClick = e=> {
        e.preventDefault()
        setStatus('none')
    }

    const handleLoad = e=> {
        e.preventDefault()
        setStatus('flex')
    }
    
    useEffect(()=> {
        window.addEventListener('load', handleLoad);
    }, [])


    return(
        <Pop style={{'display': `${popStatus}`}}>
            <div>
                <h4>This website uses cookies.</h4>
                <p>Just kidding. This is just an example. Thanks for viewing my portfolio.</p>
            </div>
            <div>
                <button onClick={handleClick}>Close</button>
            </div>
        </Pop>
    )
}

export default Popup

const Pop = Styled.div`
    transition-delay: 5s;
    background: #222222c9; 
    border-radius: 10px;
    display: flex;
    width: 100vw;
    color: #fff;
    position: fixed;
    bottom: 0;
    align-items: center;
    text-align: left;
    justify-content: space-evenly;
    padding-bottom: 5vh;
    h4{font-size: 1.5rem;}
    p{font-size: 1.25rem}
    button{
        background: #fff;
        color: #000;
        padding: 10px 25px;
        border: none;
        cursor: pointer;
        font-size: 1.25rem
        :hover{
            color: #fff;
            background: red;
        }
    }
    .open{
        display: inherit
    }
    .close{
        display: none;
    }
`;