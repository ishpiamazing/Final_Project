var express = require('express');
var router = express.Router();


module.exports = ({getProjects, addProject, EditProject, deleteProject, getSingleProject}) => {
  /* GET projects listing. */

  router.get('/', (req, res) => {

    getProjects()
    .then((projects) => res.json(projects))
    .catch((err) => res.json({ err }));

  });

  router.get ('/:id/edit', (req, res) => {
    console.log('inside the route');
      const id = req.params.id; 
     getSingleProject(id)
     .then ((project)=> res.json(project))
     .catch ((err) => res.json({error: err.message }));
    }
    );

  router.post('/', (req, res) => {
    console.log("inside post request",res)
    const {name, start_date, end_date, assigned_to,type, project_stage, payment_received,payment_date,client_id} = req.body;

      addProject(name, start_date, end_date, assigned_to,type, project_stage, payment_received,payment_date,client_id)
      .then(newProject => res.json(newProject))
      .catch(err => res.json({error: err.message}));

   })

   router.put ('/:id/edit', (req, res) => {
    //console.log(req.body);
    const id = req.params.id;
    const {name, start_date, end_date, assigned_to, type, project_stage, payment_received, payment_date, client_id} = req.body;
    EditProject(name, start_date, end_date, assigned_to, type, project_stage, payment_received, payment_date, client_id, id)
  .then ( (result) => { res.send({msg:'project updated'})})
  .catch ((err) => { res.send ({msg: err})})
  }); 

  router.delete('/:id', (req, res) => {

    console.log(req.body);
    const id = req.params.id; 
    deleteProject(id)
   // .then(users => res.json(users))
    .then(project => res.json(project))
    .catch((err) => res.json({ err }));
  });

  return router;

}
