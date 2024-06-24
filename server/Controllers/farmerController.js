// server/controllers/farmerController.js

const Farmer = require('../Models/Farmer');
const bcrypt = require('bcrypt');

exports.registerFarmer = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newFarmer = new Farmer({ name, email, password: hashedPassword });
    await newFarmer.save();
    res.status(201).json(newFarmer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.loginFarmer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const farmer = await Farmer.findOne({ email });
    if (!farmer) return res.status(404).json({ message: 'Farmer not found' });

    const isPasswordValid = await bcrypt.compare(password, farmer.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

    res.json(farmer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
