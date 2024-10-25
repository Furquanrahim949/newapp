const Product = require('../models/Product');
const User = require('../models/User');

// Add Product
exports.addProduct = async (req, res) => {
  const { sellerId, name, description, price, category } = req.body;

  try {
    const seller = await User.findById(sellerId);
    if (!seller) return res.status(404).json({ message: 'Seller not found' });

    if (category !== seller.category) {
      return res.status(403).json({ message: `Sellers can only add products related to their registered category.` });
    }

    const product = new Product({ sellerId, name, description, price, category });
    await product.save();

    res.status(201).json({ message: 'Product added successfully', product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
