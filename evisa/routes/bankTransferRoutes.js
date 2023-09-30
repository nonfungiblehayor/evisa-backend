const express = require('express');
const router = express.Router();
const BankTransfer = require('../models/bankTransfer');

router.post('/submit', async (req, res) => {
    try {
        const newBankTransfer = new BankTransfer(req.body);

        await newBankTransfer.save();

        res.status(201).json({ message: 'Bank transfer information submitted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing the bank transfer information'});
    }
});

module.exports = router;