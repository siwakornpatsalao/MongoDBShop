const mongoose = require('mongoose');
const axios = require('axios');

const Report1Schema = new mongoose.Schema({
  id: Number,
  date: { type: Date, default: Date.now },
  countOrder: Number,
  countMenu: Number,
  total: Number,
  history: [
    {
      id: { type: Number },
      name: { type: String, required: true },
      time: String,
      price: { type: Number, required: true },
    },
  ],
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report1', Report1Schema);