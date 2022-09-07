import React from "react";
import random from './resources/random.png';
// import calculator from './resources/calculator.png';
import appointment from './resources/appointment-planner.png';
import movieland from './resources/movieland.png';
import pomodoro from './resources/pomodoro.png';
import fbfMain from './resources/fbf-main.png';
import { Link } from 'react-router-dom';

export default function Projects() {
    return (
        <div className='projects center' id='projects'>
            <h2>These are some of my projects</h2>
            <div className='projects-container'>
            <Link className='project-link' to='/pt-project' id='projectOne'>
                <div className='project-holder'>
                    <img src={fbfMain} alt='project'></img>
                    <p>Business Website</p>
                </div>
                </Link>
                <a className='project-link' href='https://random-quotes-adam.netlify.app/' target='_blank' rel='noreferrer' id='projectTwo'>
                <div className='project-holder'>
                    <img src={random} alt='project'></img>
                    <p>Random Quote Generator</p>
                </div>
                </a>
                
                <a className='project-link' href='https://appointment-planner-adam.netlify.app' target='_blank' rel='noreferrer' id='projectThree'>
                <div className='project-holder'>
                    <img src={appointment} alt='project'></img>
                    <p>Appointment Planner</p>
                </div>
                </a>
                <a className='project-link' href='https://movieland-adam.netlify.app' target='_blank' rel='noreferrer' id='projectThree'>
                <div className='project-holder'>
                    <img src={movieland} alt='project'></img>
                    <p>Movieland</p>
                </div>
                </a>
                <a className='project-link' href='https://pomodoro-timer-adam.netlify.app' target='_blank' rel='noreferrer' id='projectOne'>
                <div className='project-holder'>
                    <img src={pomodoro} alt='project'></img>
                    <p>Pomodoro Break Timer</p>
                </div>
                </a>
                
            </div>
        </div>
    )
}