// usersController.js
const User = require('../models/userModel'); // Import the User model

// login user
const loginUser = async (req, res) => {
  res.json({mssg: 'login user'});
}

// signup user
const signupUser = async (req, res) => {
  const { username, email, password, role, location, energy } = req.body;

  // Validate input
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Username, email, and password are required' });
  }

  try {
    const user = await User.signup(username, email, password, role, location, energy);
    res.status(200).json({ email, user });    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
module.exports = { signupUser, loginUser };
// exports.register = async (req, res) => {
//   const { username, email, password, role, location, energy } = req.body;

//   // Validate input
//   if (!username || !email || !password) {
//     return res.status(400).json({ error: 'Username, email, and password are required' });
//   }

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ error: 'Username is already taken' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create user
//     const newUser = await User.create({ username, email, password: hashedPassword, role, location, energy });

//     res.status(201).json("Message: User created!");
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// exports.login = async (req, res) => {
//   const { username, password } = req.body;

//   // Validate input
//   if (!username || !password) {
//     return res.status(400).json({ error: 'Username and password are required' });
//   }

//   try {
//     // Find user by username
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Compare passwords
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ error: 'Incorrect password' });
//     }

//     // Passwords match, authentication successful
//     res.status(200).json({ message: 'Login successful', user });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };
