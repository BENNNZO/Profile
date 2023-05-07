import React from 'react';

import '../styles/Blobs.scss'

export default function Blobs({ children }) {
    function generateBlobs(amt) {
        let blobs = []
        for (let i = 0; i < amt; i++) {
            blobs.push(<span key={i} className='blob' style={{ 
                width: `${Math.random() * 300 + 50}px`, 
                height: `${Math.random() * 300 + 50}px`, 
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`
            }}/>)
        }
        return blobs
    }

    return (
        <section className='wrapper-blobs' style={{ overflow: 'hidden' }}>
            {children}
            {generateBlobs(10)}
        </section>
    )
}