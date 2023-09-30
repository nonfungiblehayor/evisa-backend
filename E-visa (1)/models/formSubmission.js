const mongoose = require('mongoose');

const formSubmissionSchema = new mongoose.Schema({
  // Defining the fields for the form submission
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  
  submissionDate: { type: Date, default: Date.now },
});

const FormSubmission = mongoose.model('FormSubmission', formSubmissionSchema);

module.exports = FormSubmission;
