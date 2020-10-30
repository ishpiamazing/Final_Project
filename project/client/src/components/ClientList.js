import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientItem from './ClientItem';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 4em;
  margin-left: 5em;
  // margin-right: 5em;
  margin-bottom: 5em;
`;

const ClientList = () => {

//set default value of client to array
  
const [clients, setClients] = useState([]);
useEffect(() => {
  Promise.all([
    axios.get('/clients'),
  ]).then((all) => {
    setClients(all[0].data);   
 });
}, []);

const getClients = async()=>{
 const response = await axios.get(`/clients`);
 console.log("console log of getClients", response); 
 setClients(response.data);
}
const handleDelete =(id) => {
  console.log(id);
  axios.delete(`/clients/${id}`)
  .then( res=> {
    console.log("delete res", res);
    if(res.status !== 200) {
      alert("Not able to delete client");
    }
    else {
      alert("client deleted");
      getClients();
    }
  })
};
 const clients_list = clients.map((client) => 
 
 <ClientItem
 key = {client.id}
 id = {client.id}
 first_name = {client.first_name}
 last_name = {client.last_name}
 email = {client.email}
 department = {client.department}
 client_type ={client.client_type}
 work_type ={client.work_type}
 region = {client.region}
 position_title = {client.position_title}
 tweeter_username = {client.tweeter_username}
 initial_contact_made ={client.initial_contact_made}
 onDelete={handleDelete}
 />
 )
 
return (
/*<div className="table-responsive">*/
  <Wrapper>
  <h2 className="display-7">Clients</h2> 
  <table className="table table-striped">
  <thead text-align="left">
    <tr>
       <th scope="col">id</th>
       <th scope="col">First Name</th>
       <th scope="col">Last Name</th>
       <th scope="col">Email</th>
       <th scope="col">Department</th>
       <th scope="col">Client Type</th>
       <th scope="col">Category</th>
       <th scope="col">Region</th>
       <th scope="col">Position Title</th>
       <th scope="col">Twitter</th>
       <th scope="col">Initial Contact Made</th>
       <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody text-align="left">
     {clients_list}
  </tbody>
</table>
</Wrapper>
/*</div>*/
);

}


 export default ClientList;
