// usersRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// login route
router.post('/login', userController.loginUser);

// signup route
router.post('/signup', userController.signupUser);



// router.post('/register', usersController.register); // Add register route
// router.post('/login', usersController.login);

module.exports = router;
