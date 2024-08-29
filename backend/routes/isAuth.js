const express = require('express');
const router = express.Router();
const { verifyToken } = require('../contoller/authentication');

// Verify token
router.get('/verifyToken', verifyToken);

module.exports = router;
