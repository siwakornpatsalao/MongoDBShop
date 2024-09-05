const mongoose = require('mongoose');
const axios = require('axios');

const OrderPaidSchema = new mongoose.Schema({
  id: Number,
  menu: String,
  time: String,
  status: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('OrderPaid', OrderPaidSchema);