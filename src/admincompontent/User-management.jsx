/*import React, { useState, useEffect,useRef } from 'react';


import './usermange.css';
import * as xlsl from 'xlsx';
import { Editor } from "@tinymce/tinymce-react";

const UserManagement = () => {
  const [tempData, setTempData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser , setCurrentUser ] = useState({
    id: '',
    name: '',
    phoneNo: '',
    email: '',
    password: '',
    profile: '',
    gender: '',
    city: '',
    country: '',
    skills: [],
    image: null, // Store the image URL here
  });

  const skillsOptions = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];
  const [htmlCode, setHtmlCode] = useState('');
  const editorRef = useRef(null);
  const handleEditorChange = (content, editor) => {
      setHtmlCode(content);
  };

  useEffect(() => {
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

  const handleEdit = (item) => {
    setIsEditing(true);
    setCurrentUser (item);
  };


  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = tempData.map(item => {
      return item.id === currentUser .id 
        ? { ...currentUser , skills: currentUser .skills || [] } 
        : item;
    });

    localStorage.setItem('tempData', JSON.stringify(updatedData));
    setTempData(updatedData);
    setIsEditing(false);
    setCurrentUser ({
      id: '',
      name: '',
      phoneNo: '',
      email: '',
      password: '',
      profile: '',
      gender: '',
      city: '',
      country: '',
      skills: [],
      image: null, // Reset the image state
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser  ({ ...currentUser  , [name]: value });
  };

  const handleSkillChange = (e) => {
    const { value } = e.target;
    setCurrentUser  (prevState => {
      const skills = prevState.skills.includes(value)
        ? prevState.skills.filter(skill => skill !== value)
        : [...prevState.skills, value];
      return { ...prevState, skills };
    });
  };
 //console.log(tempData);

 const convertToBase64 = (selectedFile) => {
  const reader = new FileReader()

  reader.readAsDataURL(selectedFile)

  reader.onload = () => {
    console.log('called: ', reader)
    setCurrentUser ({ ...currentUser , image: reader.result });
  }
}

  return (

    

    <div className="editform ">
      <h1>New User</h1>
      {isEditing ? (
        
        

    <div className="edit1">
        <form onSubmit={handleUpdate}>
          <h2>Edit User</h2>


          <div className="edit2">
         <div className="lab">
              First Name:
          <input
            type="text"
            name="name"
            value={currentUser .name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
      </div>
          
          <br></br>
          <lebel     className='lab'> Phone No<br></br>
          <input
            type="text"
            name="phoneNo"
            value={currentUser .phoneNo}
            onChange={handleInputChange}
            placeholder="Phone No"
            required
          />
          </lebel><br></br>
          <lebel  className='lab'> Email<br></br>
          <input
            type="email"
            name="email"
            value={currentUser .email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
          </lebel><br></br>
          <lebel  className='lab'>password<br></br>
          <input
            type="password"
            name="password"
            value={currentUser .password}
            onChange={handleInputChange}
            placeholder="Password"
            required
          />
          </lebel><br></br>
          <lebel  className='lab'>Profile<br></br>
          <input
            type="text"
            name="profile"
            value={currentUser .profile}
            onChange={handleInputChange}
            placeholder="Profile"
            required
          />
          </lebel ><br></br>
          {/* <lebel> gender<br></br>
          <input
            type="text"
            name="gender"
            value={currentUser .gender}
            onChange={handleInputChange}
placeholder="Gender"
            required
          />
          </lebel>        bhjkhugvhbjnkmnbhgh


<label  className='lab'>Gender:</label>
              <div className="edit-radio">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value={currentUser .gender}
                  onChange={handleInputChange}
                  placeholder="Gender"
            required
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value={currentUser .gender}
                  onChange={handleInputChange} 
                  placeholder="Gender"
              
                  required

            />
                  

                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value={currentUser .gender}
                 onChange={handleInputChange}
                 placeholder="Gender"
                 required
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>
          <br></br>
          <lebel  className='lab'>city
          <input
            type="text"
            name="city"
            value={currentUser .city}
            onChange={handleInputChange}
            placeholder="City"
            required
          />
          </lebel><br></br>
          <lebel className="lab">Country
          <input
          
            type="text"
            name="country"
            value={currentUser .country}
            onChange={handleInputChange}
            placeholder="Country"
            required
          />
          </lebel><br></br>
          <div className='lab'>
            <h3>Skills:</h3>
            {skillsOptions.map(skill => (
              <label key={skill}><br></br>
                <input
                  type="checkbox"
                  value={skill}
                  checked={currentUser .skills.includes(skill)}
                  onChange={handleSkillChange}
                />
                {skill}
              </label>
            ))}
            </div>
            
    
          <label  className='lab'><br></br>
            Upload Profile Image:<br></br>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  convertToBase64(file)
                }
              }}
            /> 
          </label> <br></br>

          <div className='editor'>
        <lebel>Editor

        <div style={{ padding: '20px' }}>
            <div className="App" style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                <div className="left-pane" style={{ flex: 1, marginRight: '10px' }}>
                    <textarea
                        placeholder="Paste your HTML code here..."
                        value={htmlCode}
                        onChange={e => setHtmlCode(e.target.value)}
                        style={{
                            width: '50vh',
                            height: 'calc(100vh - 100px)',
                            borderRadius: '10px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box'
                        }}
                    />
                </div>
                <div className="right-pane" style={{ flex: 1 }}>
                    <Editor
                        apiKey='YOUR_TINYMCE_API_KEY'
                        onInit={(evt, editor) => editorRef.current = editor}
                        value={htmlCode}
                        onEditorChange={handleEditorChange}
                        init={{
                            height: 'calc(100vh - 100px)',
                            width: '50vh',
                            advcode_inline: true,
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                                'bold italic forecolor | alignleft aligncenter ' +
                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                            forced_root_block: 'p',
                            paste_as_text: true
                        }}
                    />
                </div>
            </div>
        </div>

        </lebel>

       
           
             
            <button type="submit">Sign Up</button>
          </div>
          <button type="submit" className='updatebtn'>Update User</button>
          <br></br><br></br><button type="button" className='canbtn' onClick={() => setIsEditing(false)}>Cancel</button><br></br>
        </form>
        </div>
      
      
      ) : (
        <div className='table'> 
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
              <td>Skills</td>
              <td>Image</td>
              <td>Actions</td>
               <td>import data from excel</td>
            </tr>
          </thead>
          <tbody>
            {
              tempData.map((item, index) => (
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
                  <td>{item.skills ? item.skills.join(', ') : ''}</td>
                  <td>
                    {item.imageName ?<img src={item.imageName} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /> : 'No Image'}
                  </td>
                  <td>
                    <button className='editbtn' onClick={() => handleEdit(item)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => handleDeleteTempData(index)}>Delete</button>
                  </td>
                  <td>
                    <button className='xlbtn'> import </button>
                  
                  </td>
                </tr>
              ))
            }
          </tbody>
        
        </table>
        <button className='btn btn-danger' onClick={handleDeleteAllTempData}>Delete All Temporary Data</button>
        </div>

      )}
   
    </div>
  
  );
}

export default UserManagement;*/

import React, { useState, useEffect, useRef } from 'react';
import './usermange.css';
import * as xlsx from 'xlsx'; // Corrected import name
import { Editor } from "@tinymce/tinymce-react";

const UserManagement = () => {
  const [tempData, setTempData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef(null); // Create a ref for the file input
  const [disabledUsers, setDisabledUsers] = useState({}); // To keep track of disabled users
  const [selectedRows, setSelectedRows] = useState(new Set()); // To keep track of selected rows
  const [currentUser , setCurrentUser ] = useState({
    id: '',
    name: '',
    phoneNo: '',
    email: '',
    password: '',
    profile: '',
    gender: '',
    city: '',
    country: '',
    skills: [],
    image: null,
  });

  const skillsOptions = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];
  const [htmlCode, setHtmlCode] = useState('');
  const editorRef = useRef(null);

  const handleEditorChange = (content, editor) => {
    setHtmlCode(content);
  };

  useEffect(() => {
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

  const handleEdit = (item) => {
    setIsEditing(true);
    setCurrentUser (item);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = tempData.map(item => {
      return item.id === currentUser .id
        ? { ...currentUser , skills: currentUser .skills || [] }
        : item;
    });

    localStorage.setItem('tempData', JSON.stringify(updatedData));
    setTempData(updatedData);
    setIsEditing(false);
    setCurrentUser ({
      id: '',
      name: '',
      phoneNo: '',
      email: '',
      password: '',
      profile: '',
      gender: '',
      city: '',
      country: '',
      skills: [],
      image: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser ({ ...currentUser , [name]: value });
  };

  const handleSkillChange = (e) => {
    const { value } = e.target;
    setCurrentUser (prevState => {
      const skills = prevState.skills.includes(value)
        ? prevState.skills.filter(skill => skill !== value)
        : [...prevState.skills, value];
      return { ...prevState, skills };
    });
  };

  const convertToBase64 = (selectedFile) => {
    const reader = new FileReader();

    reader.readAsDataURL(selectedFile);

    reader.onload = () => {
      setCurrentUser ({ ...currentUser , image: reader.result });
    };
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };


  const exportToExcel = () => {
    const worksheet = xlsx.utils.json_to_sheet(tempData);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Data');

    // Generate a file name
    const fileName = 'exported_data.xlsx';

    // Save to file
    xlsx.writeFile(workbook, fileName);
  };
  const toggleRowSelection = (id) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(id)) {
      newSelectedRows.delete(id); // Deselect if already selected
    } else {
      newSelectedRows.add(id); // Select if not selected
    }
    setSelectedRows(newSelectedRows);
  };
  const exportSelectedToExcel = () => {
    const selectedData = tempData.filter(item => selectedRows.has(item.id));
    const worksheet = xlsx.utils.json_to_sheet(selectedData);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Selected Data');

    // Generate a file name
    const fileName = 'exported_selected_data.xlsx';

    // Save to file
    xlsx.writeFile(workbook, fileName);
  };


  

const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);    //Inside this callback, const data = new Uint8Array(event.target.result); converts the result of the file read operation into a Uint8Array, which is a typed array that represents an array of 8-bit unsigned integers.
        const workbook = xlsx.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = xlsx.utils.sheet_to_json(firstSheet);
        
        // Assuming jsonData is an array of user objects
        const newData = jsonData.map((item, index) => ({
          id: item.id || index, // Use index as a fallback for ID
          name: item.name,
          phoneNo: item.phoneNo,
          email: item.email,
          password: item.password,
          profile: item.profile,
          gender: item.gender,
          city: item.city,
          country: item.country,
          skills: item.skills ? item.skills.split(',') : [], // Assuming skills are in a comma-separated string
          image: item.image || null,
        }));

        const updatedTempData = [...tempData, ...newData];
        setTempData(updatedTempData);
        localStorage.setItem('tempData', JSON.stringify(updatedTempData));
      };
      reader.readAsArrayBuffer(file);
    }


    
  };
  const disableUser  = (id) => {
    const newDisabledUsers = { ...disabledUsers };
    newDisabledUsers[id] = true;
    setDisabledUsers(newDisabledUsers);
  };

  const enableUser  = (id) => {
    const newDisabledUsers = { ...disabledUsers };
    delete newDisabledUsers[id];
    setDisabledUsers(newDisabledUsers);
  };


  return (
    <div className="editform">
      <h1>New User</h1>
{/*       
      <button className='xl' value='files' accept=".xlsx, .xls" onClick={(e) =>handleFileUpload(e.target.files)}>import Excel </button> */}
<input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        style={{ display: 'none' }} // Hide the input
        ref={fileInputRef} // Attach the ref to the input
      />
      <button className='xl' onClick={handleButtonClick}>
        Import Excel
      </button>

      
      <button className='xl' onClick={exportToExcel} style={{ marginLeft: '12px', marginTop:'50px'}} >
        EXport as Excel file 
      </button>
      <button className='xl' onClick={exportSelectedToExcel} disabled={selectedRows.size === 0} style={{ marginLeft:   '12px', marginTop:'50px', backgroundColor:'red'}} >
        Export Selected to Excel
      </button>
      
      {isEditing ? (
        <div className="edit1">
          <form onSubmit={handleUpdate}>
            <h2>Edit User</h2>
            <div className="edit2">
              <div className="lab">
                First Name:
                <input
                  type="text"
                  name="name"
                  value={currentUser .name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  required
                />
              </div>
              <br />
              <label className='lab'> Phone No<br />
                <input
                  type="text"
                  name="phoneNo"
                  value={currentUser .phoneNo}
                  onChange={handleInputChange}
                  placeholder="Phone No"
                  required
                />
              </label><br />
              <label className='lab'> Email<br />
                <input
                  type="email"
                  name="email"
                  value={currentUser .email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />
              </label><br />
              <label className='lab'>Password<br />
                <input
                  type="password"
                  name="password"
                  value={currentUser .password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                />
              </label><br />
              <label className='lab'>Profile<br />
                <input
                  type="text"
                  name="profile"
                  value={currentUser .profile}
                  onChange={handleInputChange}
                  placeholder="Profile"
                  required
                />
              </label><br />

              <label className='lab'>Gender:</label>
              <div className="edit-radio">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={currentUser .gender === 'male'}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={currentUser .gender === 'female'}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="female">Female</label>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  checked={currentUser .gender === 'other'}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="other">Other</label>
              </div>
              <br />
              <label className='lab'>City
                <input
                  type="text"
                  name="city"
                  value={currentUser .city}
                  onChange={handleInputChange}
                  placeholder="City"
                  required
                />
              </label><br />
              <label className="lab">Country
                <input
                  type="text"
                  name="country"
                  value={currentUser .country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  required
                />
              </label><br />
              <div className='lab'>
                <h3>Skills:</h3>
                {skillsOptions.map(skill => (
                  <label key={skill}><br />
                    <input
                      type="checkbox"
                      value={skill}
                      checked={currentUser .skills.includes(skill)}
                      onChange={handleSkillChange}
                    />
                    {skill}
                  </label>
                ))}
              </div>
              <label className='lab'><br />
                Upload Profile Image:<br />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      convertToBase64(file);
                    }
                  }}
                />
              </label><br />
              <div className='editor'>
                <label>Editor
                  <div style={{ padding: '20px' }}>
                    <div className="App" style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
                      <div className="left-pane" style={{ flex: 1, marginRight: '10px' }}>
                        <textarea
                          placeholder="Paste your HTML code here..."
                          value={htmlCode}
                          onChange={e => setHtmlCode(e.target.value)}
                          style={{
                            width: '50vh',
                            height: 'calc(100vh -  100px)',
                            borderRadius: '10px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            boxSizing: 'border-box'
                          }}
                        />
                      </div>
                      <div className="right-pane" style={{ flex: 1 }}>
                        <Editor
                          apiKey='YOUR_TINYMCE_API_KEY'
                          onInit={(evt, editor) => editorRef.current = editor}
                          value={htmlCode}
                          onEditorChange={handleEditorChange}
                          init={{
                            height: 'calc(100vh - 100px)',
                            width: '50vh',
                            menubar: false,
                            plugins: [
                              'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                              'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                              'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                            ],
                            toolbar: 'undo redo | blocks | ' +
                              'bold italic forecolor | alignleft aligncenter ' +
                              'alignright alignjustify | bullist numlist outdent indent | ' +
                              'removeformat | help',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                            forced_root_block: 'p',
                            paste_as_text: true
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </label>
                <button type="submit">Sign Up</button>
              </div>
              <button type="submit" className='updatebtn'>Update User</button>
              <br /><br />
              <button type="button" className='canbtn' onClick={() => setIsEditing(false)}>Cancel</button><br />
              </div>
            </form>
          </div>
        ) : (
          <div className='table'>
            <table className='tablehover'>
              <thead>
                <tr className='head'>
                  <td>selected rows</td>
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
                  <td>Skills</td>
                  <td>Image</td>
                  <td>Actions</td>
                  <td>Import Data from Excel
                    
                   <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
                  </td>
                </tr>
              </thead>
              <tbody>
                {
                  tempData.map((item, index) => (
                    <tr key={index}>
                      <td><input
                  type="checkbox"
                  checked={selectedRows.has(item.id)}
                  onChange={() => toggleRowSelection(item.id)}
                /></td>
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
                      <td>{item.skills ? item.skills.join(', ') : ''}</td>
                      <td>
                        {item.image ? <img src={item.image} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /> : 'No Image'}
                      </td>
                      <td>
                        <button className='editbtn' onClick={() => handleEdit(item)}>Edit</button>
                        <button className='btn btn-danger' onClick={() => handleDeleteTempData(index)}>Delete</button>
                      </td>
                      <td>
                        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
                      </td>
                      

                      <td>
                {disabledUsers[item.id] ? (
                  <button onClick={() => enableUser (item.id)}>Enable</button>
                ) : (
                  <button onClick={() => disableUser (item.id)}>Disable</button>
                )}
              </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <button className='btn btn-danger' onClick={handleDeleteAllTempData}>Delete All Temporary Data</button>
          </div>
        )}
    </div>
  );
}

export default UserManagement;






/*import React, { useState, useEffect, useRef } from 'react';
import './usermange.css';
import * as xlsx from 'xlsx'; // Import xlsx library
import { Editor } from "@tinymce/tinymce-react";

const UserManagement = () => {
  const [tempData, setTempData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser , setCurrentUser ] = useState({
    id: '',
    name: '',
    phoneNo: '',
    email: '',
    password: '',
    profile: '',
    gender: '',
    city: '',
    country: '',
    skills: [],
    image: null,
  });

  const skillsOptions = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];
  const [htmlCode, setHtmlCode] = useState('');
  const editorRef = useRef(null);

  const handleEditorChange = (content, editor) => {
    setHtmlCode(content);
  };

  useEffect(() => {
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

  const handleEdit = (item) => {
    setIsEditing(true);
    setCurrentUser (item);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = tempData.map(item => {
      return item.id === currentUser .id
        ? { ...currentUser , skills: currentUser .skills || [] }
        : item;
    });

    localStorage.setItem('tempData', JSON.stringify(updatedData));
    setTempData(updatedData);
    setIsEditing(false);
    setCurrentUser ({
      id: '',
      name: '',
      phoneNo: '',
      email: '',
      password: '',
      profile: '',
      gender: '',
      city: '',
      country: '',
      skills: [],
      image: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser ({ ...currentUser , [name]: value });
  };

  const handleSkillChange = (e) => {
    const { value } = e.target;
    setCurrentUser (prevState => {
      const skills = prevState.skills.includes(value)
        ? prevState.skills.filter(skill => skill !== value)
        : [...prevState.skills, value];
      return { ...prevState, skills };
    });
  };

  const convertToBase64 = (selectedFile) => {
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
      setCurrentUser ({ ...currentUser , image: reader.result });
    };
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = xlsx.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = xlsx.utils.sheet_to_json(firstSheet);
        
        const newData = jsonData.map((item, index) => ({
          id: item.id || index,
          name: item.name,
          phoneNo: item.phoneNo,
          email: item.email,
          password: item.password,
          profile: item.profile,
          gender: item.gender,
          city: item.city,
          country: item.country,
          skills: item.skills ? item.skills.split(',') : [],
          image: item.image || null,
        }));

        const updatedTempData = [...tempData, ...newData];
        setTempData(updatedTempData);
        localStorage.setItem('tempData', JSON.stringify(updatedTempData));
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const exportToExcel = () => {
    const worksheet = xlsx.utils.json_to_sheet(tempData);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "Users");
    xlsx.writeFile(workbook, "User Data.xlsx");
  };

  return (
    <div className="editform">
      <h1>New User</h1>
      {isEditing ? (
        <div className="edit1">
          <form onSubmit={handleUpdate}>
            <h2>Edit User</h2>
            <div className="edit2">
              {/* Form fields for editing user }
              <button type="submit" className='updatebtn'>Update User</button>
              <button type="button" className='canbtn' onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </form>
        </div>
      ) : (
        <div className='table'>
          <button onClick={exportToExcel} className='btn btn-success'>Export to Excel</button>
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
                <td>Skills</td>
                <td>Image</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {
                tempData.map((item, index) => (
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
                    <td>{item.skills ? item.skills.join(', ') : ''}</td>
                    <td>
                      {item.image ? <img src={item.image} alt="" style={{ width: '50px', height: '50px', borderRadius: '50%' }} /> : 'No Image'}
                    </td>
                    <td>
                      <button className='editbtn' onClick={() => handleEdit(item)}>Edit</button>
                      <button className='btn btn-danger' onClick={() => handleDeleteTempData(index)}>Delete</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <button className='btn btn-danger' onClick={handleDeleteAllTempData}>Delete All Temporary Data</button>
        </div>
      )}
    </div>
  );
}

export default UserManagement;*/



