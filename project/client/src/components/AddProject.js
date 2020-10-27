import React , { useState } from 'react';
import axios from 'axios';

const AddProject = (props) => {
  
  const [project, setProject] = useState({
    name:'',
    number:'',
    start_date:'',
    end_date:'',
    assigned_to:'',
    type:'',
    client:'',
    payment_received:'',
    payment_date:'',
  });
  
  const handleChange = (e) => {
    setProject({
      ...project, [e.target.name]: e.target.value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    //Submit Client
    submitProject();
  }

  const submitProject=()=>{ 
    axios.post('/api/projects', project)
    .then(res=>{
    alert("Project Added!!");
    });
    }; 


  return(
    <form onSubmit = {handleSubmit}>
      {/* name */}
      <div className ="form-group">
        <label htmlFor="name">Project Name</label>
        <input 
        type="text"
        className="form-control"
        name="name"
        placeholder="Enter project name"
        defaultValue={project.name}
        onChange={handleChange}
        required />
      </div>

      {/* number */}
      <div className ="form-group">
        <label htmlFor="number">Number</label>
        <input 
        type="text"
        className="form-control"
        name="number"
        placeholder="Enter project number"
        defaultValue={project.number}
        onChange={handleChange}
        required />
      </div>

      {/* start_date */}
      <div className ="form-group">
        <label htmlFor="start_date">Start Date</label>
        <input 
        type="text"
        className="form-control"
        name="start_date"
        placeholder="Start Date"
        defaultValue={project.start_date}
        onChange={handleChange}
        required />
      </div>

      {/* end_date */}
      <div className ="form-group">
        <label htmlFor="end_date">End Date</label>
        <input 
        type="text"
        className="form-control"
        name="end_date"
        placeholder="End Date"
        defaultValue={project.end_date}
        onChange={handleChange}
        required />
      </div>

      {/* assigned_to */}
      <div className ="form-group">
        <label htmlFor="assigned_to">Assigned</label>
        <input 
        type="text"
        className="form-control"
        name="assigned_to"
        placeholder="Contractor Name"
        defaultValue={project.assigned_to}
        onChange={handleChange}
        required />
      </div>

      {/* type */}
      {/* <div className ="form-group">
        <label htmlFor="type">Project Type</label>
        <select 
        type="text"
        className="form-control"
        name="type"
        defaultValue={project.type}
        onChange={handleChange}
        required >
          <option value="Select" selected>Select....</option>
          <option value="Quality Review">Quality Review</option>
          <option value="Instructional Design">Instructional Design</option>
        </select>
      </div> */}

      {/* client */}
      {/* <div className ="form-group">
        <label htmlFor="client">Client Name</label>
        <input 
        type="text"
        className="form-control"
        name="client"
        placeholder="Enter Client Name"
        defaultValue={project.client}
        onChange={handleChange}
        required />
      </div> */}

      {/* payment recevied */}
      {/* <div className ="form-group">
        <label htmlFor="payment_received">Payment Status</label>
        <select 
        type="text"
        className="form-control"
        name="payment_received"
        defaultValue={project.payment_received}
        onChange={handleChange}
        required >
          <option value="Select" selected>Select....</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div> */}

      {/* payment_date */}
      {/* <div className ="form-group">
        <label htmlFor="payment_date">Payment Date</label>
        <input 
        type="text"
        className="form-control"
        name="payment_date"
        placeholder="Payment Date"
        defaultValue={project.payment_date}
        onChange={handleChange}
        required />
      </div> */}
      
      <button
      type="submit"
      variant="primary"
      className="btn btn-primary"
      title="Submit">
        Submit
      </button>

    </form>
  )
}

export default AddProject;