import React from "react";
// import picFour from './resources/pic4.jpg';

export default function About() {
    return (
        <div className='about center' id='home'>
            {/* <div id='pic'>
                <img src={picFour} alt='pic of the author' />
            </div> */}
            <div id='text'>
                <h1>Hey, I'm <span id='adam'>Adam</span></h1>
                <h4>a web developer</h4>
            </div>
        </div>
    )
}