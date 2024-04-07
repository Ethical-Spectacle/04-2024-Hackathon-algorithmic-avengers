// models/User.js
const mongoose = require('mongoose');

// Define User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  energy: {
    type: String,
    required: true
  }
});

// Create User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
