import React, { useState } from 'react';

import '../styles/ProjectsAccordion.scss'

import Arrow from '../assets/img/Projects/chevron-forward-outline.svg'
import RiverOak from '../assets/img/Projects/RiverOak.webp'
import Profile from '../assets/img/Projects/Profile.webp'
import Hype from '../assets/img/Projects/Hype.webp'

export default function ProjectsAccordion() {
    const [projects, setProjects] = useState([
        {
            title: 'River Oak Properties LLC.',
            desc: '(Website not deployed yet) This is a website made for a property managment company with a working contact form and page that allows users to apply to rent a house digitally',
            src: RiverOak,
            active: false
        },
        {
            title: 'Discord Clone',
            desc: 'A clone of discord with a working friend request system with provate messages and private servers that you can invite multiple friends to. ontop of all that it also has working live voice and video calls that you can have multiple friends join',
            src: Hype,
            active: false
        },
        {
            title: 'Old Profile',
            desc: 'This is my old profile I thought i would put this here as a way to show how I have progressed as a Web Developer.',
            src: Profile,
            active: false
        },
        {
            title: 'World Cup Dashboard',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est!',
            src: '#',
            active: false
        },
        {
            title: 'Password Generator',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est!',
            src: '#',
            active: false
        },
        {
            title: 'Chat Room',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est!',
            src: '#',
            active: false
        },
    ])
    
    function handleAccordion(i) {
        if (projects[i].active === true) {
            setProjects([...projects], projects[i].active = !projects[i].active)
        } else {
            setProjects([...projects], projects.forEach(e => e.active = false))
            setProjects([...projects], projects[i].active = !projects[i].active)
        }
    }

    return (
        <section className='wrapper-projects-accordion' id='projects'>
            <div className="container">
                <h2>PROJECTS I WORKED ON</h2>
                <ul>
                    {projects.map((e, i) => {
                        return (
                            <li key={i}>
                                <div className="border-control">
                                    <div className={`accordion-top ${e.active ? 'accordion-top-active' : ''}`} onClick={() => handleAccordion(i)}>
                                        <p>{e.title}</p>
                                        <img src={Arrow} alt="open accordion" style={e.active ? { transform: 'rotate(90deg)' } : { transform: 'rotate(0deg)' }} />
                                    </div>
                                    <div 
                                        className='accordion-control' 
                                        style={
                                            e.active ? { gridTemplateRows: '1fr' } : { gridTemplateRows: '0fr' }
                                        }
                                    >
                                        <div>
                                            <img 
                                                src={e.src} alt="project picture" 
                                                style={
                                                    e.active ? { opacity: '1' } : { opacity: '0' }
                                                }/>
                                            <p 
                                                style={
                                                    e.active ? { opacity: '1' } : { opacity: '0' }
                                                }
                                            >
                                                {e.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}