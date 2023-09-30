const PaymentMethod = require('../models/paymentMethod');

async function getAllPaymentMethods(req, res) {
    try {
        const paymentMethods = await PaymentMethod.find();
        res.status(200).json(paymentMethods);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error while retrieving payment methods'});
    }
}

async function getPaymentMethodById(req, res) {
    const { id } = req.params;
    try {
        const paymentMethod = await PaymentMethod.findById(id);
        if (!paymenMethod) {
            return res.status(404).json({ message: 'Payment method not found'});
        }
        res.status(200).json(paymentMethod)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while retrieving the payment method'});
    }
}


module.exports = {
    getAllPaymentMethods,
    getPaymentMethodById,
};