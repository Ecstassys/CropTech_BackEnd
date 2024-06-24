// db.js

const mongoose = require('mongoose');

// MongoDB connection URL
const mongoURI = 'mongodb+srv://rohan:rohan@cluster69.gpljaat.mongodb.net/';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
