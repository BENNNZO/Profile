import React, { useEffect, useState } from 'react';

import BackgroundImage from './assets/img/hero/render_7.jpg'

import ContactMe from './components/ContactMe';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import JobExperience from './components/JobExperience';
import Skills from './components/Skills';
import ProjectsAccordion from './components/ProjectsAccordion';

function App() {
    const [height, setHeight] = useState(0)
    useEffect(() => {
        setHeight(document.body.clientHeight)
    }, [document.body.clientHeight])

    return (
        <main>
            <div
                className='background-image-container'
                style={{ 
                    height: `${height + 100}px`
                }}
            >
                <img 
                    src={BackgroundImage} 
                    alt="background img rendered with blender 3.5 (Created by Benjamin phillips)"
                    className='background-image'
                />
            </div>
            <NavBar />
            <Hero />
            <AboutMe/>
            <Skills/>
            <ProjectsAccordion />
            <JobExperience />
            <ContactMe />
        </main>
    )
}

export default App
