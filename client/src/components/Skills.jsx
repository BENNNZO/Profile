import React from 'react';

import '../styles/Skills.scss'

// import { ReactComponent as MongoDB } from '../assets/img/skills/logo-mongodb.svg'
// import { ReactComponent as CSS3 } from '../assets/img/skills/logo-css3.svg'
// import { ReactComponent as HTML5 } from '../assets/img/skills/logo-html5.svg'
// import { ReactComponent as JS } from '../assets/img/skills/logo-javascript.svg'
// import { ReactComponent as NodeJS } from '../assets/img/skills/logo-nodejs.svg'
// import { ReactComponent as ReactJS } from '../assets/img/skills/logo-react.svg'
// import { ReactComponent as SASS } from '../assets/img/skills/logo-sass.svg'

import MongoDB from '../assets/img/skills/logo-mongodb.svg'
import CSS3 from '../assets/img/skills/logo-css3.svg'
import HTML5 from '../assets/img/skills/logo-html5.svg'
import JS from '../assets/img/skills/logo-javascript.svg'
import NodeJS from '../assets/img/skills/logo-nodejs.svg'
import ReactJS from '../assets/img/skills/logo-react.svg'
import SASS from '../assets/img/skills/logo-sass.svg'
import NextJs from '../assets/img/skills/logo-nextjs.svg'
import Tailwind from '../assets/img/skills/logo-tailwind.svg'

export default function Skills() {
    const skills = [
        {
            title: 'HTML5',
            icon: HTML5
        },
        {
            title: 'CSS3',
            icon: CSS3
        },
        {
            title: 'JS',
            icon: JS
        },
        {
            title: 'React',
            icon: ReactJS
        },
        {
            title: 'NodeJs',
            icon: NodeJS
        },
        {
            title: 'MongDB',
            icon: MongoDB
        },
        {
            title: 'SASS',
            icon: SASS
        },
        {
            title: 'Next.js',
            icon: NextJs
        },
        {
            title: 'Tailwind',
            icon: Tailwind
        }
    ]

    return (
        <section className='wrapper-skills' id="skills">
            <div className="container">
                <h2>TECH STACK</h2>
                <ul>
                    {skills.map((e, i) => {
                        return (
                            <li key={i}>
                                <img src={e.icon} alt="" />
                                <p>{e.title}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}