import React from "react";
// import { Link } from 'react-router-dom';
import fitbyfish from './resources/fitbyfish.png';
import './ptProject.css';

export default function PtProjectPage() {
    return (
        <div className='pt-project'>
            <div>
                <h1>Fitness By Fish Personal Training Website</h1>
                <a href='https://fitnessbyfish.netlify.app/' target='_blank' rel='noreferrer'>To Fitness By Fish Website</a>
                
            </div>
            <div>
                <a  href='https://fitnessbyfish.netlify.app/' target='_blank' rel='noreferrer'><img id='image' src={fitbyfish} title='Website main page' alt='website main page' height='400px' /></a>
            </div>
            <div className='project-description'>
                <h2>Project Description</h2>
                <p>I created this website as a mock project for my own Personal Training business.</p>
                <p>I used React and React Router to make it a single page application.</p>
                <p>The website has a user area with logins which are authenticated using Firebase, In the login area a client input data such as current weight in the dashboard.</p>
                <p>I also built a exercise tracker section for clients who wanted to track their gym workouts. It allows the client to input their workouts and shows the most recent data to the client.</p>
                <p>Clients can also search for previous exercises/workouts via date and exercise search parameters.</p>
                <p>Tailwind was used to style the website.</p>
            </div>
        </div>
    )
}