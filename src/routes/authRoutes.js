const express = require('express');
const authController = require('../controllers/authController');
const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require('../validators/authValidator');
const router = express.Router();

router.post('/signup', validateSignupRequest, isRequestValidated, authController.signup);
router.post('/signin', validateSigninRequest, isRequestValidated, authController.signin);
router.post('/forgot-password', authController.forgotPassword);
router.put('/reset-password', authController.resetPassword);

module.exports = router;