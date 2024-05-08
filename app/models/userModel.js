const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

// static signup method
userSchema.statics.signup = async function (username, email, password, role, location, energy) {
  const exists = await this.findOne({ email});
  if (exists) {
    throw new Error('User with email already exists');
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await this.create({ username, email, password: hashedPassword, role, location, energy });
  return user;

}

// Create User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
