import React from "react";

export default function NavBar() {
    return (
        <div className='navbar' id='navbar'>
            <div className='navList'>
                <ul>
                    <li><a href='#home'>About</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#skills'>Skills</a></li>
                </ul>
            </div>
        </div>
    )
}