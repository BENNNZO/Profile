import React from 'react';

import '../styles/JobExperience.scss'

export default function JobExperience() {
    const jobs = [
        {
            title: 'River Oak Properties LLC - Web Developer',
            dates: 'APRIL 2023 - MAY 2023',
            bullets: [
                'Developed and tested a full stack website',
                'Used Node.js to create a contact form that emails the company',
                'Also Used Node.js for a payment form so tenants can easily pay rent',
                'Used React to create a fast and responsive font-end',
                'Lastly I used SCSS to give the website a unique style'
            ]
        },
        {
            title: 'Champions Retreat Golf Club - Busser',
            dates: 'AUGUST 2021 - APRIL 2023',
            bullets: [
                'Monitored food and beverage supplies, assisting with restocking when needed.',
                'Refilled drinks and provided extra napkins and silverware to go the extra mile in serving customers.',
                'Reset and clean tables quickly to prepare for new customers.',
                'Assisted wait staff with timely food delivery and guest requests.',
                'Coordinated with kitchen staff to determine timely delivery and accuracy of food orders.'                
            ]
        },
        {
            title: 'River Oak Properties LLC - Work Assistant',
            dates: 'JUNE 2018 - AUGUST 2021',
            bullets: [
                'Painted multiple houses',
                'Pressure washed fences, outside walls, driveways, etc',
                'Landscaping',
                'Drywall repair',
                'Electrical work',
                'Refinished hardwood flooring'             
            ]
        }
    ]

    return (
        <section className='wrapper-job-experience'>
            <div className='container'>
                <h2>JOB EXPERIENCES</h2>
                <ul className='jobs'>
                    {jobs.map((e1, i1) => {
                        return (
                            <li key={`job-${i1}`} className='job'>
                                <span style={{ height: '10px', aspectRatio: '1', borderRadius: '100%', backgroundColor: 'white', display: 'inline-block' }} />
                                <div className="job-info">
                                    <h3>{e1.title}</h3>
                                    <p>{e1.dates}</p>
                                </div>
                                <span style={{ height: '100%', width: '1px', backgroundImage: 'linear-gradient(to bottom, white, transparent)', display: 'inline-block', margin: '0 auto' }} />
                                <ul className="job-bullets">
                                    {e1.bullets.map((e2, i2) => {
                                        return (
                                            <li key={`bullet-${i1}-${i2}`}>{e2}</li>
                                        )
                                    })}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}