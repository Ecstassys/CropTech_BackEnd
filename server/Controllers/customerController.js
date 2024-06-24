const Customer = require('../Models/Customer');
const bcrypt = require('bcrypt');

exports.registerCustomer = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newCustomer = new Customer({ name, email, password: hashedPassword });
    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.loginCustomer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const customer = await Customer.findOne({ email });
    if (!customer) return res.status(404).json({ message: 'Customer not found' });

    const isPasswordValid = await bcrypt.compare(password, customer.password);
    if (!isPasswordValid) return res.status(400).json({ message: 'Invalid credentials' });

    res.json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
