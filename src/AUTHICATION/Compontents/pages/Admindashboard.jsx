import { Link } from 'react-router-dom';
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import '../../../admincompontent/css/Admindash.css'; // Import the CSS file
import { Outlet } from 'react-router-dom';
import { IoSettings } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineContentPasteGo } from "react-icons/md"
import { BiSupport } from "react-icons/bi";
import { IoIosAnalytics } from "react-icons/io";
import { MdSpaceDashboard } from "react-icons/md";

const Admindashboard = () => {
  const { logout } = useAuth0();

  return (
    <div   className='page'>
      < div className="sidebar">
        <ul  className='menu'>
          <li className='dashii'><MdSpaceDashboard /><Link to="/dashboard">Dashboard</Link></li><br></br>
          <li className='usemangeicon'><FaUserCircle /> <Link to="/usermangement">User  Management</Link></li><br></br>
          <li className='conmangeicon'><MdOutlineContentPasteGo /><Link to="/comange">Content Management</Link></li><br></br>
          <li className='settingicon'>
          <IoSettings /><Link to="/setting">Settings</Link></li><br></br>
          <li className='analyicon'><IoIosAnalytics /><Link to="#analytics">Analytics/Reports</Link></li><br></br>
          <li className='supporticon'><BiSupport />
          <Link to="/support">Support/Help</Link></li><br></br>
          <li>
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><br></br>
              Log Out
            </button>
          </li>
        </ul>
       
        </div>
      
        <div className='text' >
          <h1> This  is Admin page</h1>
          <Outlet/>
        </div>
      
        
    </div>
  
  );
};

export default Admindashboard;