/*import React from 'react'
import './usermange.css'

const Usermangement = () => {
    const [tempData, setTempData] = React.useState([]);

    
  //const [selectedIndex, setSelectedIndex] = React.useState(null);

  React.useEffect(() => {
    const storedData = localStorage.getItem('tempData');
    if (storedData) {
      setTempData(JSON.parse(storedData));
    }
  }, []);

  const handleDeleteTempData = (index) => {
    const newData = [...tempData];
    newData.splice(index, 1);
    localStorage.setItem('tempData', JSON.stringify(newData));
    setTempData(newData);
  };

  const handleDeleteAllTempData = () => {
    localStorage.removeItem('tempData');
    setTempData([]);
  };

  return (
    
        <div className='user'>
        <h1>New User</h1>
        <p> 
      </p>
      <table className='tablehover'>
      
      <thead>
      
        <tr>
          
          <td>Sr.no</td>
          <td>Id</td>
          <td>Name</td>
         <td>email</td>
           <td>password</td>          
        </tr>

        </thead>
        <tbody>
          {
          tempData.map((item, index) => {
            return(
          <tr key={index}>
            <td>{index + 1} </td>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          <td>{item.password}</td>
          <td>
          <button  className='btn btn-danger' onClick={() => handleDeleteTempData(index)}>Delete</button></td>
            </tr>
            
          )
           
        })
             }
           
           </tbody>
           
      <button className='btn btn-danger' onClick={handleDeleteAllTempData}>Delete All Temporary Data</button>
      
           </table>
          
      </div>

  
        )
      }

export default Usermangement

        <ul>
        {tempData.map((user, index) => (
          <li key={index}>
            {user.name} ({user.email}, {user.password})
            <button onClick={() => handleDeleteTempData(index)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <button onClick={handleDeleteAllTempData}>Delete All Temporary Data</button>*/
      import React from 'react';
//import '../AUTHICATION/Compontents/pages/CSS/Register.css';
//import './css/New.css'
import { useState } from 'react';
import'./usermange.css';
import users from './Dash'
const UserManagement = () => {
  const [tempData, setTempData] = React.useState([]);
  const [lastName,setLastname] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [id, setid] = useState('');
  const [password, setPassword] = useState('');
  const [update,setUpdate] = useState('');

  const [firstName, setFirstName] = useState('');
  
  React.useEffect(() => {
    const storedData = localStorage.getItem('tempData');
    if (storedData) {
      setTempData(JSON.parse(storedData));
    }
  }, []);

  const handleDeleteTempData = (index) => {
    const newData = [...tempData];
    newData.splice(index, 1);
    localStorage.setItem('tempData', JSON.stringify(newData));
    setTempData(newData);
  };

  const handleDeleteAllTempData = () => {
    localStorage.removeItem('tempData');
    setTempData([]);
  };

  const handleEdit=(id) =>{
    const dt =tempData.filter(item => item.id !== id); 
    if(dt !== undefined)
    { setUpdate(true)
      setid(id);
      setFirstName(dt[0].firsname);
      setLastname(dt[0].name);
       setPassword(dt[0].password);
        setPhoneNo(dt[0].phoneNo);
    }
  }

  
const handlesave=(e) =>{ 
  let error ='';
  if (firstName==='')
    error +='firstName is requried, ';
  
  if (lastName==='')
    error +='LastName is requried, ';

  
  if (phoneNo<=0)
    error +='phoneNO is requried. ';

  if(error ==='')
  {

  e.preventDefault();
  const dt = [...tempData];
  const newobject = {
     
      id:users.length  + 1,
      firstName: firstName,
      LastName: lastName,
      phoneNo: phoneNo,
    
  }
  dt.push(newobject);
  setTempData (dt);
   

}
else { alert(error)}
} 


const handleupdate=() => {
  const index= tempData.map((item)=>{ 
    return item.id
  }).indexOf(id);

  const dt =[...tempData];
  dt[index].firstName= firstName;
  dt[index].LastName= lastName;
  dt[index].phone= phoneNo;

  setTempData(dt);
}
  return (
    <div className='user'>
      <h1>New User</h1>
      <table className='tablehover'>
        <thead>
          <tr className='head'>
            <td>Sr. No</td>
            <td>ID</td>
            <td>Name</td>
            <td>Phone No</td>
            <td>Email</td>
            <td>Password</td>
            <td>Profile</td>
            <td>Gender</td>
            <td>City</td>
            <td>Country</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            tempData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phoneNo}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.profile}</td>
                  <td>{item.gender}</td>
                  <td>{item.city}</td>
                  <td>{item.country}</td>
                  <td>
                  <div>
          {
            !update  ?
            
            <button className='btn btn-primary' onClick={(e)=> handlesave(e)}>Save</button>
            :
            <button className='btn btn-primary' onClick={()=> handleupdate()}>update</button>
          }
           
          </div>
                    
            <button className='btn btn-primary' onClick={()=> handleEdit(item.id)}>Edit</button>&nbsp;
            
            
                    <button className='btn btn-danger' onClick={() => handleDeleteTempData(index)}>Delete</button>
                  </td>
                </tr>

               );
            })
          }


        </tbody>
        
      <button className='btn btn-danger' onClick={handleDeleteAllTempData}>Delete All Temporary Data</button>
      </table>
    </div>
  );
}

export default UserManagement;