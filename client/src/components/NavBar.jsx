import React from 'react';

import Logo from '../assets/img/logo/logo.png'
import '../styles/NavBar.scss'

export default function NavBar() {
    return (
        <nav>
            <img src={Logo} alt="logo" />
            <ul>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#skills">My Skills</a></li>
                <li><a href="#contact-me">Contact Me</a></li>
            </ul>
        </nav>
    )
}