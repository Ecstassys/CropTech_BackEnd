// server/routes/farmer.js

const express = require('express');
const router = express.Router();
const farmerController = require('../Controllers/farmerController'); // Check this path

router.post('/register', farmerController.registerFarmer);
router.post('/login', farmerController.loginFarmer);

module.exports = router;
