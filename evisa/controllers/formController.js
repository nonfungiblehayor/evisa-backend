const FormSubmission = require('../models/formSubmission'); 

async function getAllFormSubmissions(req, res) {
  try {
    const formSubmissions = await FormSubmission.find();
    res.status(200).json(formSubmissions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving form submissions' });
  }
}

async function getFormSubmissionById(req, res) {
  const { id } = req.params;
  try {
    const formSubmission = await FormSubmission.findById(id);
    if (!formSubmission) {
      return res.status(404).json({ message: 'Form submission not found' });
    }
    res.status(200).json(formSubmission);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while retrieving the form submission' });
  }
}

module.exports = {
  getAllFormSubmissions,
  getFormSubmissionById,
};
