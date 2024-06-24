const express = require('express');
const router = express.Router();
const commodityController = require('../Controllers/commodityController');

router.get('/', commodityController.getAllCommodities);
router.post('/', commodityController.createCommodity);
// Remaining CRUD routes for Commodity...

module.exports = router;
