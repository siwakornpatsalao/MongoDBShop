const mongoose = require('mongoose');
const axios = require('axios');

const OrderSchema = new mongoose.Schema({
  id: Number,
  menu: String,
  time: String,
  status: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);