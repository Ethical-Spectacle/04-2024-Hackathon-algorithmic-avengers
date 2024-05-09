const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

// Define User schema
const userSchema = new mongoose.Schema({
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
userSchema.statics.signup = async function (email, password, role, location, energy) {
  if(!email || !password) {
    throw new Error('Email and password are required');
  }
  if(!validator.isEmail(email)) {
    throw new Error('Email is invalid');
  }
  if(!validator.isStrongPassword(password)) {
    throw new Error('Password is not strong enough');
  }
  
  const exists = await this.findOne({ email});
  if (exists) {
    throw new Error('User with email already exists');
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await this.create({email, password: hashedPassword, role, location, energy });
  return user;

}

// static login method
userSchema.statics.login = async function (email, password) {
  if(!email || !password) {
    throw new Error('Email and password are required');
  }
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw new Error('Incorrect password');
  }
  throw new Error('Incorrect email');
}
// Create User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
