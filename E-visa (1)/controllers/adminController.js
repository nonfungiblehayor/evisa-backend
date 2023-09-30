const bcrypt = require('bcrypt');
const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');

async function adminLogin(req, res) {
  try {
    const { username, password } = req.body;

    // Finding the admin user by username
    const admin = await Admin.findOne({ username });

    // Checking if the admin exists
    if (!admin) {
      return res.status(401).json({ message: 'Admin not found' });
    }

    // Comparing the provided password with the stored hash
    const passwordMatch = await bcrypt.compare(password, admin.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ adminId: admin._id }, 'eHlnHAAXMOU7GPcEKC1veYju7oBQMPWZ', { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing the request' });
  }
}

module.exports = {
  adminLogin,
};
