const express = require('express');
const db = require('./users_model');
const restricted = require('../auth/restricted-middleware');

const router = express.Router();

router.get('/', restricted, (req, res) => {
  db.find()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({message: 'could not find user', error: err.message});
    });
});

module.exports = router;
