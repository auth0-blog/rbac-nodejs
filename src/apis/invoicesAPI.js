const express = require('express');

const {insertInvoice, getInvoices} = require('../database/invoices');

const router = express.Router();

// endpoint to return all invoice requests
router.get('/', async (req, res) => {
  res.send(await getInvoices());
});

// endpoint to insert new invoice request
router.post('/', async (req, res) => {
  const newInvoice = req.body;
  await insertInvoice(newInvoice);
  res.send({ message: 'Invoice request inserted.' });
});

module.exports = router;
