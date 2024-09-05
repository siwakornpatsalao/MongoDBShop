const mongoose = require('mongoose');
const axios = require('axios');

const CategorySchema = new mongoose.Schema({
  id: Number,
  name: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Category', CategorySchema);