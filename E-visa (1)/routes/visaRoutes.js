const express = require('express');
const router = express.Router();
const Visa = require('../models/visa');

router.post('/submit', async (req, res) => {
    try {
        // creating new visa application
        const newVisaApplication = new Visa(req.body);

        // saving new application to the database
        await newVisaApplication.save();

        res.status(201).json({ message: 'Visa application submitted successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your application' });
    }
});

// We can define more routes as needed for visa-related actions

module.exports = router;