import React, { useRef } from 'react'

import axios from 'axios'

import '../styles/ContactMe.scss'

export default function ContactMe() {
    let firstRef = useRef()
    let lastRef = useRef()
    let emailRef = useRef()
    let phoneRef = useRef()
    let bodyRef = useRef()

    function handleContactSubmit(e) {
        e.preventDefault()
        console.log('submit')
        console.log([firstRef.current.value, lastRef.current.value])
        console.log([emailRef.current.value, phoneRef.current.value])
        console.log(bodyRef.current.value)
        axios.post(`${window.location.href}email`, {
            first: firstRef.current.value,
            last: lastRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            body: bodyRef.current.value
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <section className='wrapper-contact-me'>
            <div className="container">
                <h2>Contact Me</h2>
                <form onSubmit={handleContactSubmit}>
                    <label htmlFor="name" className='full required'>Full Name</label>
                    <div className="border-control">
                        <input type="text" ref={firstRef} placeholder='First' id='name' required/>
                    </div>
                    <div className="border-control">
                        <input type="text" ref={lastRef} placeholder='Last' id='name' required/>
                    </div>
                    <label htmlFor="email" className='required'>Email</label>
                    <label htmlFor="phone">Phone</label>
                    <div className="border-control">
                        <input type="email" ref={emailRef} placeholder='Email' id='email' required/>
                    </div>
                    <div className="border-control">
                        <input type="tel" ref={phoneRef} placeholder='Phone' id='phone'/>
                    </div>
                    <label htmlFor="body" className='full required'>Email Body</label>
                    <div className="border-control full">
                        <textarea type="text" rows="4" ref={bodyRef} placeholder='Email body' id='body' required/>
                    </div>
                    <div className="border-control button" style={{ width: '127px' }}>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}
