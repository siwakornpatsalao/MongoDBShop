const mongoose = require('mongoose');
const axios = require('axios');

const AddonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  thumbnail: String,
  price: Number,
  amount: Number,
  editAmount: Number,
  unit: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Addon', AddonSchema);