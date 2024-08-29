const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../contoller/userActivity');

// Register a new user
router.post('/signup', registerUser);

// Login a user
router.post('/login', loginUser);

module.exports = router;
