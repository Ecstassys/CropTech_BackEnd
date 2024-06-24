const Commodity = require('../Models/Commodity');

exports.getAllCommodities = async (req, res) => {
  try {
    const commodities = await Commodity.find().populate('farmer', 'name');
    res.json(commodities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCommodity = async (req, res) => {
  const { name, price, quantity, farmer } = req.body;
  const newCommodity = new Commodity({ name, price, quantity, farmer });

  try {
    await newCommodity.save();
    res.status(201).json(newCommodity);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Remaining CRUD methods for Commodity...
