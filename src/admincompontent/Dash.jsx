

/*import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './css/dash.css';



const Dash = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [users, setUsers] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [file, setFile] = useState(null);

  const cityCountryMap = {
    "New York": "USA",
    "Toronto": "Canada",
    "Paris": "France",
    "Tokyo": "Japan",
    "Mumbai": "India"
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('tempData')) || [];
    setUsers(storedUsers);
  }, []);

  const handleCity = (e) => {
    const selectedCity = e.target.value;
    const selectedCountry = cityCountryMap[selectedCity] || '';
    setCity(selectedCity);
    setCountry(selectedCountry);
  };


  const handleSkillChange = (e) => {
    const value = e.target.value;
    setSelectedSkills(prevSkills => 
      prevSkills.includes(value) 
        ? prevSkills.filter(skill => skill !== value) 
        : [...prevSkills, value]
    );
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };


  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const userData = {
      id: users.length + 1, // Auto-increment ID
      name: `${firstName} ${lastName}`,
      phoneNo,
      email,
      password,
      profile,
      gender,
      city,
      country,
      role: profile, // Store the selected role
    };

    const updatedUsers = [...users, userData];
    localStorage.setItem('tempData', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);

    // Reset form fields
    setFirstName('');
    setLastName('');
    setPhoneNo('');
    setEmail('');
    setPassword('');
    setProfile('');
    setGender('');
    setCity('');
    setCountry('');
    setSelectedSkills([]);
    setFile(null);


    // Redirect to login page
    navigate('/login'); // Change '/login' to your actual login route
  };

  return (
    <div className="adminform1">
      <div className="admin1">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="admin2">
            <label className='lab'>
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your First Name"
                required
              />
            </label>
            <label  className='lab'>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Your Last Name"
                required
              />
            </label >
            <label  className='lab'>
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
            <label  className='lab'>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                required
              />
            </label>
            <label   className='lab'>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
                required
              />
            </label>
            <label   className='lab'>
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
            <div>
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

            
            <label  className='lab'>
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

<div className='lab'>
              <label>Skills:</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="JavaScript"
                    checked={selectedSkills.includes("JavaScript")}
                    onChange={handleSkillChange}
                  />
                  JavaScript
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="React"
                    checked={selectedSkills.includes("React")}
                    onChange={handleSkillChange}
                  />
                    React
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Node.js"
                    checked={selectedSkills.includes("Node.js")}
                    onChange={handleSkillChange}
                    
                  />
                  Node.js
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="CSS"
                    checked={selectedSkills.includes("CSS")}
                    onChange={handleSkillChange}
                  />
                  CSS
                </label>
              </div>
            </div>
            <label className='lab'>
              Upload File:
              <input
                type="file"
                onChange={handleFileChange}
                />
              </label>
              </label>
            </div>
            <button type="submit">Sign Up</button>
          </div>

        </form>
    
      </div>
    </div>
  );
};

export default Dash;*/
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import './css/dash.css';

const Dash = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState('');
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [users, setUsers] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null); // Change file state to image




  

  const cityCountryMap = {
    "New York": "USA",
    "Toronto": "Canada",
    "Paris": "France",
    "Tokyo": "Japan",
    "Mumbai": "India"
  };

 


  const handleCity = (e) => {
    const selectedCity = e.target.value;
    const selectedCountry = cityCountryMap[selectedCity] || '';
    setCity(selectedCity);
    setCountry(selectedCountry);
  };

  const handleSkillChange = (e) => {
    const value = e.target.value;
    setSelectedSkills(prevSkills => 
      prevSkills.includes(value) 
        ? prevSkills.filter(skill => skill !== value) 
        : [...prevSkills, value]
    );
  };

 
  const convertToBase64 = (selectedFile) => {
    const reader = new FileReader()

    reader.readAsDataURL(selectedFile)

    reader.onload = () => {
      console.log('called: ', reader)
      setImage(reader.result)
    }
  }


   
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    const userData = {
      id: users.length + 1, // Auto-increment ID
      name: `${firstName} ${lastName}`,
      phoneNo,
      email,
      password,
      profile,
      gender,
      city,
      country,
      role: profile, // Store the selected role
      skills: selectedSkills, // Store selected skills
      imageName: image ? image : null, // Store the image name or handle it as needed
     // Store the file name
    // Store the file (you might want to handle this differently)
    };

    const updatedUsers = [...users, userData];
    localStorage.setItem('tempData', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);

    // Reset form fields
    setFirstName('');
    setLastName('');
    setPhoneNo('');
    setEmail('');
    setPassword('');
    setProfile('');
    setGender('');
    setCity('');
    setCountry('');
    setSelectedSkills([]);
    setImage(null); 

    // Redirect to login page
    navigate('/login'); // Change '/login' to your actual login route
  };

  return (
    <div className="adminform">
      <div className="admin1">
        <h1> *** WELCOME**** </h1>
        <form onSubmit={handleSubmit}>
          <div className="admin2">
            <label className='lab'>
              First Name:
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your First Name"
                required
              />
            </label>
            <label className='lab'>
              Last Name:
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Your Last Name"
                required
              />
            </label>
            <label className='lab'>
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
            <label className='lab'>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                required
              />
            </label>
            <label className='lab'>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your Password"
                required
              />
            </label>
            <label className='lab'>
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
            <div>
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
            </div>
            <label className='lab'>
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
            <div className='lab'>
              <label>Skills:</label>
              <div>
                <label>
                  <input
                    type="checkbox"
                    value="JavaScript"
                    checked={selectedSkills.includes("JavaScript")}
                    onChange={handleSkillChange}
                  />
                  JavaScript
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="React"
                    checked={selectedSkills.includes("React")}
                    onChange={handleSkillChange}
                  />
                  React
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Node.js"
                    checked={selectedSkills.includes("Node.js")}
                    onChange={handleSkillChange}
                  />
                  Node.js
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="CSS"
                    checked={selectedSkills.includes("CSS")}
                    onChange={handleSkillChange}
                  />
                  CSS
                </label>
              </div>
            </div>
            <label className='lab'>
              Upload Profile Image:
              <input
                type="file"
                accept="image/*"
                onChange={(e) => convertToBase64(e.target.files[0])} // Update the state with the selected file
              />
            </label>

            </div>
            <br></br>
       

       
           
             <div id="login-button" class=" buttons">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dash;


