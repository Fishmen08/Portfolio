import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <div className='footer'>
            <FontAwesomeIcon icon={faCopyright} id='copyright' />
            <p id='name'>Adam Fisher 2022</p>
        </div>
    )
}