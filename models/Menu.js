const mongoose = require('mongoose');
const axios = require('axios');

const MenuSchema = new mongoose.Schema({
  id: Number,
  name: String,
  thumbnail: String,
  description: String,
  price: Number,
  category: String,
  addonId: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Addon' }],
  optionGroupId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OptionGroup' }],
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Menu', MenuSchema);