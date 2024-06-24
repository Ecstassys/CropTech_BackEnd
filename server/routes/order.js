const express = require('express');
const router = express.Router();
const orderController = require('../Controllers/orderController');

router.post('/', orderController.createOrder);
router.get('/customer/:customerId', orderController.getOrdersByCustomer);

module.exports = router;
