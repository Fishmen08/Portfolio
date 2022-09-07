import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5, faCss3, faJsSquare, faReact, faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <div className='contact center' id='skills'>
            <h2>Lets work together...</h2>
            <p>My skills</p>
            <div className='logo'>
                <FontAwesomeIcon className='icon' title='Github' icon={faGithub} />
                <FontAwesomeIcon className='icon' title='HTML' icon={faHtml5} id='html' />
                <FontAwesomeIcon className='icon' title='CSS' icon={faCss3} id='css' />
                <FontAwesomeIcon className='icon' title='Javascript' icon={faJsSquare} id='js' />
                <FontAwesomeIcon className='icon' title='React' icon={faReact} id='react' />
            </div>
            <div className='contact-links'>
            <h3>Email: adamdfisher08@gmail.com</h3>
                <h2>Find me at:</h2>
                <div className='small-logo'>
                <a href='https://www.linkedin.com/in/adam-fisher-a58305248' target='_blank' rel='noreferrer'><FontAwesomeIcon className='small-icon' icon={faLinkedin} id='linkedIn' /></a>
                <a href='https://github.com/Fishmen08' target='_blank' rel='noreferrer'><FontAwesomeIcon className='small-icon' icon={faGithubAlt} /></a>
                </div>
            </div>
        </div>
    )
}