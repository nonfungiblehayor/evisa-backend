const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB (replace 'database-url' with our MongoDB connection string)
mongoose.connect('mongodb+srv://admin:@@evisa123@evisa.qtbd7yp.mongodb.net/evisa?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const visaRoutes = require('./routes/visaRoutes');
app.use('/visa', visaRoutes);

const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes); 

// We can define other routes and middleware here

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
