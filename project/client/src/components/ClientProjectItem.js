import React from 'react';
import moment from 'moment';

const ClientProjectItem = ({id, name, number, start_date, end_date, assigned_to, type, payment_received, payment_date, client_id}) => {
  return (
<<<<<<< Updated upstream
   
        <tr>
        <td className="col-2">{name}</td>
        <td className="col-4">{type}</td>
        <th className="col-8">{moment(start_date).format('DD/MM/YYYY')}</th>
        <th className="col-8">{moment(end_date).format('DD/MM/YYYY')}</th>
        
       </tr>
   
    
=======
    <tr>
      <td className="col-2">{name}</td>
      <td className="col-4">{type}</td>
      {/* <td className="col-6">{id}</td> */}
      {/* <th className="col-8">{moment(start_date).format('DD/MM/YYYY')}</th> */}
      <td className="col-8">{moment(start_date).format('DD/MM/YYYY')}</td>
    </tr>
>>>>>>> Stashed changes
  );
}

export default ClientProjectItem;