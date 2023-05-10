import React from 'react';
import { motion } from 'framer-motion';

import Logo from './Logo';
// import Profile from '../assets/img/about/profile.png'
import Profile from '../assets/img/about/profile-compressed.png'

import '../styles/Hero.scss'

export default function Hero() {
    return (
        <section className='wrapper-hero'>
            <span className="blob" />
            <span className="blob-2" />
            <div>
                <Logo />
                <motion.h1
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.2 }}} 
                >
                    Benjamin Phillips
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.2 }}}
                >
                    <button>
                        <p>Contact Me</p>
                    </button>
                </motion.div>
            </div>
            <div className="img-container">
                <img src={Profile} alt="picture of me" />
            </div>
        </section>
    )
}