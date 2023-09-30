const Visa = require('../models/visa');

async function getAllVisaApplications(req, res) {
    try {
        const visaApplications = await Visa.find();
        res.status(200).json(visaApplications);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while retrieving visa application'});
    }
}

// controlling function to retrieve a specific visa applicatio by id
async function getVisaApplicationById(req, res) {
    const { id } = req.params;
    try {
        const visaApplication = await Visa.findById(id);
        if (!visaApplication) {
            return res.status(404).json({message: 'Visa application not found'});
        }
        res.status(200).json(visaApplication);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while retrieving the visa application'});
    }
}

module.exports = {
    getAllVisaApplications,
    getVisaApplicationById,
};