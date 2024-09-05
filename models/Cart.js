const mongoose = require('mongoose');
const axios = require('axios');

const CartSchema = new mongoose.Schema({
  id: Number,
  name: String,
  thumbnail: String,
  price: Number,
  note: String,
  amount: Number,
  addonId: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Addon' }],
  optionGroupId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OptionGroup' }],
  promotionId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Promotion' }],
  itemId: [{type: mongoose.Schema.Types.ObjectId, ref: 'Menu'}],
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Cart', CartSchema);