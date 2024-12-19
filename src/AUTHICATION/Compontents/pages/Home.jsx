import React from 'react'
import './Homii.css';
//import About from './About';
import {Link, Outlet } from 'react-router-dom';
//import  tech from  './photos/tech.png'

const Home = () => {
  return (
    < div className='hero'>
        <div className='hero-text'>
            <h1>We Ensure better education for a better world</h1>
            <p>Our cutting-edges  currium is designed to empower students with the knowlege, skills, and experiences needed to excel in the dynmic field of education</p>
            <button id='ex-btn' > Explore more</button>
        </div>
        {/* <div className='pages'>
           <Link to="/about"></Link>
        </div>
        <Outlet/> */}
    </div>
  
  )
} 

export default Home;
