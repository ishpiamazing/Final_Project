import React , { useState } from 'react';
import axios from 'axios';


const AddClient = (props) => {
      
  const [client,setClient] = useState({
      first_name:'',
      last_name:'',
      email:'',
      department:'',
      client_type:'',
      work_type:'',
      region:'',
      position_title:'',
      tweeter_username:'',
      initial_contact_made:'',
  },
  
  );

  const handleChange = (e) => {
   setClient ({
   ...client, // save the previous state
   [e.target.name] : e.target.value 
   });

  };

  const handleSubmit = (event)=> {
    event.preventDefault();
    //Save the Client
    console.log(client);
     SaveClient();
  }
  // const SaveClient=()=>{ axios.post(`/api/users`,client)
  const SaveClient=()=>{ axios.post(`/clients`,client)
    .then(
      (res)=>{
     console.log(res);
     //alert(res.data.message);
     props.history.push('/clients');
     }, 
     (error) => {
       console.log(error);
     });
    };
    
  return(
  <form onSubmit = {handleSubmit}>
    <div className ="form-group">
      <label htmlFor="name">First Name</label>
      <input 
      type="text"
      className="form-control"
      name="first_name"
      placeholder="Enter first name"
      defaultValue={client.first_name}
      onChange={handleChange}
      required />
    </div>

    <div className ="form-group">
      <label htmlFor="lastName">Last Name</label>
      <input 
      type="text"
      className="form-control"
      name="last_name"
      placeholder="Enter last name"
      defaultValue={client.last_name}
      onChange={handleChange}
      required />
    </div>
    <div className ="form-group">
      <label htmlFor="email">Email</label>
      <input 
      type="text"
      className="form-control"
      name="email"
      placeholder="Enter Email"
      defaultValue={client.email}
      onChange={handleChange}
      required />
    </div>

    <div className ="form-group">
      <label htmlFor="department">Department</label>
      <input 
      type="text"
      className="form-control"
      name="department"
      placeholder="Enter Department"
      defaultValue={client.department}
      onChange={handleChange}
      required />
    </div>

    <div className ="form-group">
      <label htmlFor="client_type">Client Type</label>
      <select 
      type="text"
      className="form-control"
      name="client_type"
      // placeholder="Enter Department"
      defaultValue={client.client_type}
      onChange={handleChange}
      required >
    <option value="Select" >Select....</option>
    <option value="Potential Client">Potential Client</option>
    <option value="Current Client">Current Client</option></select>
    </div>

    <div className ="form-group">
      <label htmlFor="work_type">Work Type</label>
      <select 
      type="text"
      className="form-control"
      name="work_type"
      // placeholder="Select Work type"
      defaultValue={client.work_type}
       onChange={handleChange}
      required >
   <option value="Select" >Select....</option> 
  <option value="Educational Institution">Educational Institution</option> 
  <option value="Business">Business</option></select>
    </div>




    <div className ="form-group">
      <label htmlFor="region">Region</label>
      <input 
      type="text"
      className="form-control"
      name="region"
      placeholder="Enter Region"
      defaultValue={client.region}
      onChange={handleChange}
      required />
    </div>

    <div className ="form-group">
      <label htmlFor="positionTitle">Position Title</label>
      <input 
      type="text"
      className="form-control"
      name="position_title"
      placeholder="Enter Position Title"
      defaultValue={client.position_title}
      onChange={handleChange}
      required />
    </div>

    <div className ="form-group">
      <label htmlFor="tweeterUserName">Tweeter handle</label>
      <input 
      type="text"
      className="form-control"
      name="tweeter_username"
      placeholder="Enter Tweeter handle"
      defaultValue={client.tweeter_username}
      onChange={handleChange}
      required />
    </div>


    <div className ="form-group">
      <label htmlFor="initial_contact_made">Initial Contact Done</label>
      <select 
      type="text"
      className="form-control"
      name="initial_contact_made"
      // placeholder="Enter Department"
      defaultValue={client.initial_contact_made}
      onChange={handleChange}
      required >
    <option value="Select" >Select....</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option></select>
    </div>


   

  <button
          
         type="submit"
          variant="primary"
          className="btn btn-primary"
          title="Submit">Submit
  </button>

  </form>
  )
}

export default AddClient;