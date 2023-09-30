const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'evisa@gmail.com',
        pass: 'your-password',
    },
});

module.exports = transporter;