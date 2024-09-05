const mongoose = require('mongoose');
const axios = require('axios');

const PromotionSchema = new mongoose.Schema({
  id: Number,
  type: String,
  productType: String,
  data: Number,
  start_date: { type: Date, default: Date.now },
  finish_date: { type: Date, default: Date.now },
  days: [{ type: String, required: true }],
  start_time: String,
  finish_time: String,
  image: String,
  topic: String,
  message: String,
  menuId: [ {type: mongoose.Schema.Types.ObjectId, ref: 'Menu' }],
  category: [{ type: String, required: true }],
  amount: Number,
  updated_at: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Promotion', PromotionSchema);