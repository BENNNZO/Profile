import React from 'react';

import '../styles/Projects.scss'

export default function Projects() {
    const projects = [
        {
            title: 'River Oak Properties LLC.',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est!'
        },
        {
            title: 'Discord Clone',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est!'
        },
        {
            title: 'Old Profile',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est!'
        },
        {
            title: 'World Cup Dashboard',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est!'
        },
        {
            title: 'Password Generator',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est!'
        },
        {
            title: 'Chat Room',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, est!asd'
        }
    ]

    return (
        <section className='wrapper-projects'>
            <div className="container">
                <h2>PROJECTS</h2>
                <ul>
                    {projects.map((e, i) => {
                        return (
                            <li key={i}>
                                <div>
                                    <h3>{e.title}</h3>
                                    <p>{e.desc}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}