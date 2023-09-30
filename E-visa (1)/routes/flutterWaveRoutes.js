const express = require('express');
const router = express.Router();
const axios = require('axios');

const FLUTTERWAVE_SECRET_KEY = 'YOUR_FLUTTERWAVE_SECRET_KEY';

// ROUTE TO INITIATE A PAYMENT
router.post('/initiate-payment', async (req, res) =>{
    try {
        const paymentData = {
            tx_ref: 'unique_transaction_reference',
            amount: req.body.amount,
            currency: 'NGN',
            redirect_url: 'https://e-visa.com/payment-successful',
            payment_type: 'card',

        };

        const response = await axios.post('https://api.flutterwave.com/v3/charge?type=card', paymentData, {
            headers: {
                Authorization: `Bearer ${FLUTTERWAVE_SECRET_KEY}`,
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while initiating the payment'});
    }
});

module.exports = router;