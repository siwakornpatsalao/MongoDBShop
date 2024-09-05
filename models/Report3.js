const mongoose = require('mongoose');
const axios = require('axios');

const Report3Schema = new mongoose.Schema({
  id: Number,
  date: { type: Date, default: Date.now },
  name: String,
  count: Number,
  total: Number,
  popular: [
    {
      id: { type: Number },
      name: { type: String, required: true },
      amount: { type: Number, required: true },
      price: { type: String, required: true }
    },
  ],
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report3', Report3Schema);