const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
  gift_name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [String], // Array of tags
  recipient_age_group: { type: String, required: true },
  occasion: { type: String, required: true },
  purchase_link: { type: String, required: true },
  gift_description: { type: String, required: true },
  recipient_name: { type: String, required: true },
  shipping_address: { type: String, required: true },
});

module.exports = mongoose.model('Gift', giftSchema);
