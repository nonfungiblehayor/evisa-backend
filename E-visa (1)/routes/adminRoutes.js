const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

function authenticateAdmin(req, res, next) {
  
  const token = req.headers.authorization; 

 
  next(); 
}

router.post('/login', adminController.adminLogin);

router.get('/dashboard', authenticateAdmin, (req, res) => {
  
  res.send('Admin Dashboard');
});


module.exports = router;
