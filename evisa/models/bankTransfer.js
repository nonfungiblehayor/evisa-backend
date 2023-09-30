const mongoose = require('mongoose');

const bankTransferSchema = new mongoose.Schema({
    accountName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    bankName: { type: String, required: true },
    // more fields here

    submissionDate: { type: Date, default: Date.now },
});

const BankTransfer = mongoose.model('BankTransfer', bankTransferSchema);

module.exports = BankTransfer;