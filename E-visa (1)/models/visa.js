const mongoose = require('mongoose');

const visaSchema = new mongoose.Schema({
  // Defining the fields for the Visa application
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  passportNumber: { type: String, required: true, unique: true },
  
  submissionDate: { type: Date, default: Date.now },
});

const Visa = mongoose.model('Visa', visaSchema);

module.exports = Visa;
