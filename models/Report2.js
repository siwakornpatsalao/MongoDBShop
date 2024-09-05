const mongoose = require('mongoose');
const axios = require('axios');

const Report2Schema = new mongoose.Schema({
  id: Number,
  date: { type: Date, default: Date.now },
  time: String,
  name: String,
  count: Number,
  price: Number,
  status: String,
  type: String,
  detail: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      amount: { type: Number, required: true },
      unit: { type: String, required: true }
    },
  ],
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report2', Report2Schema);