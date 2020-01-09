const router = require("express").Router();
let Filiere = require('../models/filiere.model');

router.route('/').get((req, res) => {
    Filiere.find()
      .then(filieres => res.json(filieres))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
    const filiere = req.body.filiere;
   
    const newFiliere = new Filiere({
        filiere
    });
  
    newFiliere.save()
    .then(() => res.json(newFiliere))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;