import React, { useState } from 'react';
import './conmange.css';

const Comange = () => {
    const [content, setContent] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleCreateContent = (newContent) => {
        setContent([...content, newContent]);
        // Clear the input fields after adding content
        setTitle('');
        setDescription('');
    };

    const handleEditContent = (index, updatedContent) => {
        const newContent = [...content];
        newContent[index] = updatedContent;
        setContent(newContent);
    };

    const handleDeleteContent = (index) => {
        const newContent = [...content];
        newContent.splice(index, 1);
        setContent(newContent);
    };

    return (
        <div>
            <div id="content-management">
                <h2>Content Management</h2>
                <h3>Create Content</h3>
                <form className='con' onSubmit={(e) => {
                    e.preventDefault();
                    const newContent = {
                        title: title,
                        description: description
                    };
                    handleCreateContent(newContent);
                }}>
                    <input
                        type="text"
                        placeholder="Title"
                        className='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <div className='conbutton'>
                        <button type='submit'>Create</button>
                    </div>
                </form>

                {content.length > 0 && (
                    <div  className=' con-list'>
                        <h3>Content List</h3>
                        

                        <table className='tab-hover'>
      
      <thead>
      
        <tr>
          
          <td>Sr.no</td>
        
          
         <td>Title</td>
           <td>Discription</td>          
        </tr>

        </thead>
        <tbody>
         
                          {content.map((item, index) => {
                          return(
                                <tr key={index}>
                                   <td>{index + 1} </td>
                                    <h5>{item.title}</h5>
                                    <td>{item.description}</td>
                                    <button className=' edit-button' onClick={() => handleEditContent(index, {
                                        title: prompt('Enter new title', item.title),
                                        description: prompt('Enter new description', item.description)
                                    })}>Edit</button>
                                    <button onClick={() => handleDeleteContent(index)} className=' danger'>Delete</button>
                                </tr>
                            )})
                          }
                          </tbody>
                          
                          </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Comange;