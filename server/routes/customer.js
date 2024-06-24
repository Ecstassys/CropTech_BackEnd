const express = require('express');
const router = express.Router();
const customerController = require('../Controllers/customerController');

router.post('/register', customerController.registerCustomer);
router.post('/login', customerController.loginCustomer);

module.exports = router;
