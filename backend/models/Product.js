const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, enum: ['medical', 'non-medical'], required: true },
});

module.exports = mongoose.model('Product', productSchema);
