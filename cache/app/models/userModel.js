// import mongoose from 'mongoose';
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Users schema
const userSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password_hash: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    role: { type: String, default: 'user' },
    // created_at: { type: Date, default: Date.now }
  });

// export const User = mongoose.model('User', userSchema);
// Create User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;