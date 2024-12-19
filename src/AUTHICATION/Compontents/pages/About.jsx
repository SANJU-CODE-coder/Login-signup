import React from 'react'
import './about.css'
import Blank  from './photos/Blank (2).png'
import about1 from './photos/about1.jpg'

const About = () => {
  return (
    <div className='hii'>
     // <p></p>
    <div className='About'>

  
      
         <div className='image'>
         <img src={about1} alt="" />
         <div className='herotext'>
         <h1>About us</h1>
                      <p>Our Company is a full-service development company driven by an internal team of talented real estate professionals whose combined breadth of experience includes all areas of real estate development. </p>
         </div>
         </div>   
         
    </div>
    </div>
  )
}

export default About
