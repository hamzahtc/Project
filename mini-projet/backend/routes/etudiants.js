const router = require("express").Router();
let Etudiant = require('../models/etudiant.model');

router.route('/').get((req, res) => {
    Etudiant.find()
      .then(etudiants => res.json(etudiants))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add').post((req, res) => {
    const cne = req.body.cne;
    const cin = req.body.cin;
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const sexe_gender = req.body.sexe_gender;
    const filiere = req.body.filiere;
    const newEtudiant = new Etudiant({
        cne,
        cin,
        nom,
        prenom,
        sexe_gender,
        filiere
    });
  
    newEtudiant.save()
    .then(() => res.json(newEtudiant))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:id').delete((req, res) => {
    Etudiant.findByIdAndDelete(req.params.id)
      .then(() => res.json('Etudiant deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').get((req, res) => {
    Etudiant.findById(req.params.id)
      .then(etudiant => res.json(etudiant))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  router.route('/update/:id').put((req, res) => {
    Etudiant.findById(req.params.id)
      .then(etudiant => {
        etudiant.cne = req.body.cne;
        etudiant.cin = req.body.cin;
        etudiant.nom = req.body.nom;
        etudiant.prenom = req.body.prenom;
        etudiant.sexe_gender = req.body.sexe_gender;
        etudiant.filiere = req.body.filiere;
        etudiant.save()
          .then(() => res.json(etudiant))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  module.exports = router;