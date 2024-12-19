//export default Login;
/*import React, { useState } from 'react';
import  '../pages/CSS/Page.css'

import { useNavigate } from 'react-router-dom';
import error from '../pages/Forget'
//import Register from './Register';

  function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();
    const handleLogin = (e) => {
      e.preventDefault();
  
      
      if (email === 'sanjusani@gmail.com') {
        
        
        navigate('/admin');
      } else if (email === 'user@gmail.com') {
      
        navigate('/user');
      } else {
        alert('Invalid email or password');
      }
     };

  return (
    <div className='hello'>
    <div  className='login-page'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit" className='login-button'>Login</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        
      
      </form>
      <p>
        <a href="/Forget">Forgot password?</a>
      </p>
    </div>
    </div>
  );
}

export default Login;*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  '../pages/CSS/Page.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('tempData')) || [];
    const user = storedUsers.find(user => user.email === email && user.password === password);

    if (user) {
      // Successfully logged in
      alert(`Welcome ${user.name}. Your role is ${user.role}.`);
      
      // You can navigate to different routes based on user.role if needed
      if (user.role === 'Admin') {
        navigate('/admin'); // Redirect to admin dashboard
      } else {
        navigate('/user'); // Redirect to user dashboard
      }
    } else {
      alert('Invalid email or password.');
    }
  };

  return (
    <div className='hello'>
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label  className='lb1'>
          Email:
          <br></br>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className='lb' >
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className='login-button'>Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;