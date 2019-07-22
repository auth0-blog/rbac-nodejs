const express = require('express');

const {insertVacation, getVacations} = require('../database/vacations');

const router = express.Router();

// endpoint to return all vacation requests
router.get('/', async (req, res) => {
  res.send(await getVacations());
});

// endpoint to insert new vacation request
router.post('/', async (req, res) => {
  const newVacation = req.body;
  await insertVacation(newVacation);
  res.send({ message: 'Vacation request inserted.' });
});

module.exports = router;
