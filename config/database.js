// config/database.js
const mongoose = require('mongoose');

// Connect to MongoDB Atlas cluster
const uri = 'mongodb+srv://rastogi3aastha:I6GCCgFFSpLTmOC0@cluster0.unpjbdp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // You can add more options here if needed
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;