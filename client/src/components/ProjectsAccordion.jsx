import React, { useState } from 'react';

import '../styles/ProjectsAccordion.scss'

import Arrow from '../assets/img/Projects/chevron-forward-outline.svg'
import RiverOak from '../assets/img/Projects/RiverOak.webp'
import Profile from '../assets/img/Projects/Profile.webp'
import Hype from '../assets/img/Projects/Hype.webp'
import NSP from '../assets/img/Projects/NSP-Sports.png'
import AI from '../assets/img/Projects/promptopia.png'
import Activist from '../assets/img/Projects/activist.png'
import FunThings from '../assets/img/Projects/fun-things.png'
import Snippity from '../assets/img/Projects/Snippity.png'
import Idle from '../assets/img/Projects/Idle.png'

import OpenLink from '../assets/svg/open-link.svg'

export default function ProjectsAccordion() {
    const [projects, setProjects] = useState([
        {
            title: 'River Oak Properties LLC.',
            desc: '(Website not deployed yet) This is a website made for a property managment company with a working contact form and page that allows users to apply to rent a house digitally.',
            src: RiverOak,
            active: false,
            link: "#not-deployed-anymore"
        },
        {
            title: 'Snippity',
            desc: "This is my prized possession.  It's a website where you can share your own code snippets to the world. Still needs a couple minor bug fixes but ultimately this is my best work as far as interactivity and user friendliness.",
            src: Snippity,
            active: false,
            link: "https://snippity.dev/"
        },
        {
            title: 'Pizza Idle Game',
            desc: 'I made an idle game because as a kid Cookie Clicker was always one of if not my favorite game to play.  It is not fully finished but the way I created the game it will be really easy to add more upgrades and workers.  The only problem is I have to do the art and I can be a bit of a perfectionist when it comes to personal projects.',
            src: Idle,
            active: false,
            link: "https://idle-game-bennnzo.vercel.app/"
        },
        {
            title: 'Activist (Daily Data Tracker)',
            desc: 'This is a personal project of mine where you fill out a daily form and over time your are able to see the trends in your mood, energy, sleep time, etc. This website also uses nextAuth for Google SSO and a mongo db to save the user credentials if the user decides not to use Google SSO.',
            src: Activist,
            active: false,
            link: "https://activist-desktop-bennnzo.vercel.app/"
        },
        {
            title: 'Fun Things',
            desc: 'This is a website i made to catalog all the random things that i make on my free time. You should check it out!',
            src: FunThings,
            active: false,
            link: "https://fun-things-git-main-bennnzo.vercel.app/"
        },
        {
            title: 'AI-Prompts (Promptopia)',
            desc: 'This is a NextJs CRUD application that allows users to create, read, update, and delete posts.  Is also has a feature allowing users to search for a prompt and view another users profile.',
            src: AI,
            active: false,
            link: "#not-deployed-anymore"
        },
        {
            title: 'Discord Clone',
            desc: 'A clone of discord with a working friend request system with provate messages and private servers that you can invite multiple friends to. ontop of all that it also has working live voice and video calls that you can have multiple friends join',
            src: Hype,
            active: false,
            link: "#not-deployed-anymore"
        },
        {
            title: 'Old Profile',
            desc: 'This is my old profile I thought i would put this here as a way to show how I have progressed as a Web Developer.',
            src: Profile,
            active: false,
            link: "#not-deployed-anymore"
        },
        {
            title: 'World Cup Dashboard',
            desc: 'This is a dashboard that allows users to see stats revolving the worldcup of 2022',
            src: NSP,
            active: false,
            link: "#not-deployed-anymore"
        }
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
                                        <div style={{ position: "relative" }}>
                                            <div style={{ 
                                                padding: "8px", 
                                                backgroundColor: "rgba(0, 0, 0, 0.5)", 
                                                position: "absolute",
                                                top: "10px",
                                                right: "10px",
                                                borderRadius: "10px",
                                                pointerEvents: "none",
                                                display: "grid",
                                                placeItems: "center"
                                            }}>
                                                <img 
                                                    src={OpenLink} 
                                                    alt="open link"
                                                    style={{
                                                        height: "25px",
                                                        aspectRatio: "1 1",
                                                        filter: "invert(1)"
                                                    }}
                                                />
                                            </div>
                                            {/* <OpenLink /> */}
                                            <img 
                                                src={e.src} alt="project picture" 
                                                style={
                                                    e.active ? { opacity: '1', cursor: "pointer" } : { opacity: '0', cursor: "pointer" }
                                                }
                                                onClick={()=> window.open(e.link, "_blank")}
                                            />
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