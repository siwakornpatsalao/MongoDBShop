const mongoose = require('mongoose');
const axios = require('axios');

const OptionGroupSchema = new mongoose.Schema({
  id: Number,
  name: String,
  options: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  require: String,
  selection: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('OptionGroup', OptionGroupSchema);