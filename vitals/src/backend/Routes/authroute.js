const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Define the login route
router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.get('/verify-email', authController.verifyEmail);
module.exports = router;