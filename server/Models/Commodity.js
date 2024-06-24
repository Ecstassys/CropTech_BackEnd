const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommoditySchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  farmer: { type: Schema.Types.ObjectId, ref: 'Farmer', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Commodity', CommoditySchema);
