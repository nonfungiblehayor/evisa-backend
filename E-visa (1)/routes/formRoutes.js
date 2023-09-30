const express = require('express');
const router = express.Router();
const FormSubmission = require('../models/formSubmission');
router.post('/submit', async (req, res) => {
  try {
   
    const newFormSubmission = new FormSubmission(req.body);

    await newFormSubmission.save();

    // Send a confirmation email (you can implement this logic here)
    
    res.status(201).json({ message: 'Form submission successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your submission' });
  }
});

module.exports = router;