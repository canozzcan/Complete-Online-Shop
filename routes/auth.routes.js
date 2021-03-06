const express = require('express');

const authController = require('../controllers/auth.controller');

const router = express.Router();

// authController.getSignup is triggered whenever we get an incoming get request to /signup
router.get('/signup', authController.getSignup);

router.post('/signup', authController.signup);

router.get('/login', authController.getLogin);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

module.exports = router;