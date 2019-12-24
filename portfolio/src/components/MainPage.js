import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Skills from './Skills';
import Contact from './Contact';

const MainPage =()=>{
    const [showContact, setShowContact] = useState(true || false);
    const showHideClassName = showContact ? "contact display-open" : "contact display-none";

    const handleClick = e => {
        e.preventDefault();
        setShowContact(true);
    };
    const handleClose = e => {
        e.preventDefault();
        setShowContact(false);
    };

    return (
        <section id='mainpage'>
            <div>
                <h2>About Me</h2>
                <p>From preschool teaching to coding.</p>
                <button onClick={handleClick}>Contact</button>
            </div>
            <Skills/>
            <Contact className={showHideClassName} handleClose={handleClose}/>
        </section>
    )
}

export default MainPage;

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<MainPage />, container)