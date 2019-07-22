const express = require('express');

const {insertExpense, getExpenses} = require('../database/expenses');

const router = express.Router();

// endpoint to return all expense reports
router.get('/', async (req, res) => {
  res.send(await getExpenses());
});

// endpoint to insert new expense report
router.post('/', async (req, res) => {
  const newExpense = req.body;
  await insertExpense(newExpense);
  res.send({ message: 'Expense report inserted.' });
});

module.exports = router;
