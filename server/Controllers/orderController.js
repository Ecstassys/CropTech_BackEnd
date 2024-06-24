const Order = require('../Models/Order');
const Commodity = require('../Models/Commodity');

exports.createOrder = async (req, res) => {
  const { customer, commodity, quantity } = req.body;

  try {
    const commodityItem = await Commodity.findById(commodity);
    if (!commodityItem) return res.status(404).json({ message: 'Commodity not found' });

    const totalPrice = commodityItem.price * quantity;
    const newOrder = new Order({ customer, commodity, quantity, totalPrice });
    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getOrdersByCustomer = async (req, res) => {
  const { customerId } = req.params;

  try {
    const orders = await Order.find({ customer: customerId }).populate('commodity', 'name price');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
