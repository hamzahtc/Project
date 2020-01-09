const router = require("express").Router();
let Admin = require('../models/admin.model');

  router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const newAdmin = new Admin({
        username,
        email,
        password
    });
    
    newAdmin.save()
    .then(() => res.json(newAdmin))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/login').post((req, res) => {
    Admin.find()
      .then(admin => res.json(admin))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;