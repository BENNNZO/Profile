import React from 'react';
import { motion } from 'framer-motion';

import '../styles/Logo.scss'

import Logo1 from '../assets/img/Logo/logo-1.png'
import Logo2 from '../assets/img/Logo/logo-2.png'
import Logo3 from '../assets/img/Logo/logo-3.png'
import Logo4 from '../assets/img/Logo/logo-4.png'

export default function Logo() {
    const logoVariants = {
        initial: { opacity: 0, x: -10 },
        animate: { 
            opacity: 1,
            x: 0,
            transition: {
                ease: 'easeInOut',
                staggerChildren: 0.1,
                duration: 0.2
            }
        },
    }

    return (
        <motion.section variants={logoVariants} initial="initial" animate="animate" className='wrapper-logo'>
            <motion.img variants={logoVariants} src={Logo1} alt="logo part 1" />
            <motion.img variants={logoVariants} src={Logo2} alt="logo part 2" />
            <motion.img variants={logoVariants} src={Logo3} alt="logo part 3" />
            <motion.img variants={logoVariants} src={Logo4} alt="logo part 4" />
        </motion.section>
    )
}