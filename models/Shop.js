const mongoose = require('mongoose');
const axios = require('axios');

const ShopSchema = new mongoose.Schema({
  id: Number,
  name: String,
  phone: String,
  email: String,
  password: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Shop', ShopSchema);