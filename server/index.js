// index.js or server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Example routes
const farmerRoutes = require('./routes/farmer');
const customerRoutes = require('./routes/customer');
const commodityRoutes = require('./routes/commodity');
const orderRoutes = require('./routes/order');

app.use('/api/farmers', farmerRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/commodities', commodityRoutes);
app.use('/api/orders', orderRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
