const User = require('../models/User');

// Register User
exports.registerUser = async (req, res) => {
  const { name, email, password, category } = req.body;

  try {
    const user = new User({ name, email, password, category });
    await user.save();
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
