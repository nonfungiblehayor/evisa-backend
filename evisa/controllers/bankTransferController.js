const BankTransfer = require('../models/bankTransfer');

async function getAllBankTransfers(req, res) {
    try {
        const bankTransfers = await BankTransfer.find();
        res.status(200).json(bankTransfers);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'An error occurred while retrieving bank transfer'});
    }
}

// Controlling function to retrieve a specific bank transfer by id
async function getBankTransferById(req, res) {
    const { id } = req.params;
    try {
        const bankTransfer = await BankTransfer.findById(id);
        if (!bankTransfer) {
            return res.status(404).json({ message: 'Bank transfer information not found' });
        }
        res.status(200).json(bankTransfer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while retrieving the bank tranfer information'});
    }
}

module.exports = {
    getAllBankTransfers,
    getBankTransferById,
};