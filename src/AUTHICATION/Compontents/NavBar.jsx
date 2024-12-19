// Import necessary dependencies
import React from 'react';
import  {useNavigate}   from 'react-router-dom';
import {Link } from 'react-router-dom';
import './Nav.css';
import { useState } from 'react';

//import logo from '../edusity_assets/logo.png'
// Define the navbar component
//import loginWithRedirect from './pages/Login'
function NavBar() {
  const navigate= useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track if the user is authenticated
  
    const handleLogin = () => {
      setIsAuthenticated(true); // Simulate a successful login
    };
  
    const handleLogout = () => {
      setIsAuthenticated(false); // Simulate a logout

      navigate('/');
    };

  
  return (
    <nav>
      
     
    <div>
       
       <ul className='items'>
        <li >
          <Link to="/"className='links' >
            Home
          </Link>
        </li>
        <li >
          <Link to="/about" className='links'>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact"className='links' >
            Contact
          </Link>
        </li>
      
       
        {/* <div  id='login-button'className=' buttons' >   
       
            <Link to="/login" ><button>
              Login</button>
            </Link>
          </div>
          <div id='register-button' className=' buttons'>
           <Link to="/register" ><button> Signup</button>
            </Link>
          </div> */}

          {isAuthenticated ? (
            <>
              
          
                <button onClick={handleLogout}   className='logout-buttons' >Logout</button>
                
            
            </>
          ) : (
            <>
              <div id='login-button' className='buttons'>
                <Link to="/login" onClick={handleLogin}><button>Login</button></Link>
              </div>
              <div id='register-button' className='buttons'>
                <Link to="/register"><button>Signup</button></Link>
              </div>
            </>
          )}
        
          </ul>
        </div>

        </nav>
  );
}
// Render the app
export default NavBar;



