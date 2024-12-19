import React from 'react'
import contusbg from './photos/contusbg.jpg'
import './contact.css'
import loction from './photos/loction.png'
import call from './photos/call.png'
import email from './photos/email.png'
import openhour from './photos/openhour.png'
const Contact = () => {
  return (
    <div className='Contact'>
    <div className='contact-1'>
       <h1>Contact us</h1>
       <p>“Drop us a line” is a cool way to say “get in touch.” It's like tossing a friendly message in a bottle. For the tech-savvy crowd, “Ping us” works great. </p>
        </div>
        <div className='contact-2'>
          <div className='loction'>
            <img src={loction} alt="" />
            <h3>ADDRESS</h3>
            <p>Kaspro Pvt.Ltm ,
              <p>sector 74, 
                 Mohali</p>
            </p>
          </div>
          <div className='call'>
            <img src={call} alt="" />
            <h3>CALL TODAY</h3>
            <p>950-121-6941
            </p>
            </div>
            <div className='email'>
            <img src={email} alt="" />
            <h3> EMAIL US</h3>
            <p>Kaspro@gmail.com
            </p>
            </div>

            <div className='hour'>
            <img src={openhour} alt="" />
            <h3> OPENING HOUR</h3>
            <p>Mon — Fri 10:00 – 23:00
            </p>
            <p>Sut-Sun- 10:00 – 19:00 </p>
            </div>
        </div>
        <div className='cont-3'>
          <img src={contusbg} alt="" />
        </div>
    </div>
  )
}

export default Contact
