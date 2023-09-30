const mongoose = require('mogoose');

const paymentMethodSchema = new mongoose.Schema({
    methodType: { type: String, required: true},
    transactionId: { type: String },
    status: { type: String },
    //add more 
    paymentDate: { type: Date, default: Date.now},
});

const PaymentMethod = mogoose.model('PaymentMethod', paymentMethodSchema);

module.exports = PaymentMethod;