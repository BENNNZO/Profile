import React, { useEffect, useState, useRef } from 'react';

import BackgroundImage from './assets/img/hero/render_7.jpg'

import ContactMe from './components/ContactMe';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import JobExperience from './components/JobExperience';
import Skills from './components/Skills';
import ProjectsAccordion from './components/ProjectsAccordion';

function App() {
    const mainRef = useRef(0)

    const [height, setHeight] = useState(0)
    useEffect(() => {
        console.log(mainRef)
        setTimeout(() => {
            setHeight(mainRef.current.clientHeight)
        }, 100);
    }, [mainRef])

    return (
        <main 
            ref={mainRef}
            style={{ overflow: "hidden" }}
        >
            <div
                className='background-image-container'
                style={{ 
                    height: `${height}px`
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
