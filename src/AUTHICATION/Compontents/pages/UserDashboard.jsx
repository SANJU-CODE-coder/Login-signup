import React from 'react';
//import '../Css/User.css';
//import '../componentadmin/Login';
import userdash from './photos/userdash.webp'
import './userdash.css'
const UserDashboard = () => {
  return (
    <div className='user'>
      <div className='page'>
      <h1>User Dashboard</h1>
      <p>This is the user dashboard.</p>
      </div>
     <div className='image'>
        <img src={userdash} alt="" />
      </div>
    </div>
  );
};

export default UserDashboard;