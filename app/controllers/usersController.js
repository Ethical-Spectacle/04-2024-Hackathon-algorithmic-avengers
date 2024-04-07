// usersController.js
const bcrypt = require('bcrypt');
const User = require('../models/user'); // Import the User model

exports.register = async (req, res) => {
  const { username, email, password, role, location, energy } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Username, email, and password are required' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({ username, email, password: hashedPassword, role, location, energy });

    res.status(201).json("Message: User created!");
  } catch (error) {
    res.status(500).json({ error.response.data: 'Internal server error' });
  }
};
