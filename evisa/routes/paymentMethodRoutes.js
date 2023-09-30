const express = require('express');
const router = express.Router();
const PaymentMethod = require('../models/paymentMethod'); 
router.post('/submit', async (req, res) => {
  try {

    const newPaymentMethod = new PaymentMethod(req.body);

    await newPaymentMethod.save();

    res.status(201).json({ message: 'Payment method submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the payment method' });
  }
});

module.exports = router;
