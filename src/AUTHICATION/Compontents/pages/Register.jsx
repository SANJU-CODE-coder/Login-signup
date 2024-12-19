
/*import React from 'react'
import '../../../admincompontent/css/dash.css'
import  { useState, useEffect } from 'react';

const Register=()=>{

  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [password, setpassword] = useState('');
  const [gender, setgender] = useState('');
  const [city,setcity] = useState('');
const [country,setcountry] = useState('');
  useEffect(() => {
    fetch('/api/users') // Use proxy server to bypass CORS
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => setError(error.message));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = { name, email, password , gender, city, country};
    const storedData = localStorage.getItem('tempData');
    const newData = storedData ? [...JSON.parse(storedData), userData] : [userData];
    localStorage.setItem('tempData', JSON.stringify(newData));
    // clear form fields
    setName('');
    setEmail('');
    setpassword('');
    setgender('');
    setcity('');
    setcountry('');
  };

  return (
    
   /* <div className='loginsignup'>
    <div className='loginsignup-container'>
     <h1>Sign Up</h1>
     <form onSubmit={handleSubmit}>
    <div className='loginsignup-fields'>
      
    {error && <div style={{ color: 'red' }}>{error}</div>}

    
      <label>
      <input type="text"    value={name} onChange={(event) => setName(event.target.value)}  placeholder='your Name'  />
      </label>
      <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}  placeholder='your Email Address' /> 

      <input type="password" value={password} onChange={(event) => setpassword(event.target.value)} placeholder='your Password' /> 
      <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" placeholder='phone no'/>

   
  <label for="gender">Gender:</label>
  
<div class="gender-radio">
  <input type="radio" id="male" name="gender" value="male" onChange={(event) => setgender(event.target.value)}  />
  <label for="male">Male</label>
  </div>
  
<div class="gender-radio">
   <input type="radio" id="female" name="gender" value="gender"   />
  <label for="female">Female</label>
  </div>

  
<div class="gender-radio">
  <input type="radio" id="other" name="gender" value="gender"/>
  <label for="other">Other</label> 
  </div>


  <label for="city">City:</label>
               <select id="city" name="city" value={city}  onChange={(e) => setcity(e.target.value)} required >
               <option value="delhi"    >Delhi </option>
               <option value="torotno" >Toronto</option>
            <option value=" New york " >New york</option>
               <option value="Mascow" >Moscow</option>
            </select>
            <label for="Country">Country:</label>
               <select id="country" value={country}  onChange={(e) => setcountry(e.target.value)} required >
               <option value="india"  >India</option>
               <option value="canada">Canada</option>
               <option value="america">America</option>
               <option value="russia">Russia</option>
            </select>
  </div></form>*/
  
  /*<div className="adminform">
      <div className="admin1">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="admin2">
            <label>
              First Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your First Name"
                required
              />
            </label>
            <label>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Your Last Name"
                required
              />
            </label>
            <label>
              Phone No:
              <input
                type="tel"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder="Your Phone Number"
                pattern="[0-9]{10}"
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
                required
              />
            </label>
            <label>
              Profile:
              <select
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
                required
              >
                <option value="">Select Profile</option>
                <option value="User ">User </option>
                <option value="Admin">Admin</option>
          
              </select>
            </label>
            
              <label>Gender:</label>
              <div className="admin-radio">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                />
                    <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                />
                  <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor="other">Other</label>
              </div>

              
            <label>
              City:
              <select
                value={city}
                onChange={handleCity}
                required
              >
                <option value="">Select City</option>
                <option value="New York">New York</option>
                <option value="Toronto">Toronto</option>
                <option value="Paris">Paris</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Mumbai">Mumbai</option>
              </select>
              
              <label>Country:</label>
              <input
                className="input-box"
                type="text"
                name="country"
                value={country}
                readOnly
              />
            
            </label>

  </div>
    <div className='signup'> 
    <button  type='submit' >signup</button>
    </div>
    </form>
    <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email}{user.password}{user.gender})</li>
        ))}
      </ul>
      
   
   
   <p className='loginsignup-login'>Already have a account?<a href="/login">Login here </a></p>
    <div className='loginsignup-agree'>
        <input type='checkbox' name=''  id=''/>
        </div>
    <div className=''></div>
 </div>
    </div>
  )
}

export default Register*/

import React from 'react'
import './CSS/Updateregister.css'
import Dash from '../../../admincompontent/Dash'

const Register=()=>{

return (
//   <div  className='registerclass'>

//  <div className='loginsignup'>
    
  <Dash/>
//  </div>
//   </div>
)
}
export default Register