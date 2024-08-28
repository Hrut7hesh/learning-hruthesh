const Product = require('../models/products');

exports.createProduct = async (req, res) => {
  let { name, price, availability } = req.body;
  const product = new Product({ name, price, availability });

  try {
    let result = await product.save();
    res.json(result);
  } catch (err) {
    res.json(err);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    let products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json(err);
  }
};

exports.getProductById = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.json(err);
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    let product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.json(err);
  }
};

exports.updateProductById = async (req, res) => {
  try {
    let product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.json(err);
  }
};

exports.findProductByName = async (req, res) => {
  try {
    let products = await Product.find({ name: req.params.name });
    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found with that name' });
    }
    res.json(products);
  } catch (err) {
    res.json(err);
  }
};

exports.findProductByAvailability = async (req, res) => {
  try {
    let products = await Product.find({ availability: req.params.availability });
    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found with that availability' });
    }
    res.json(products);
  } catch (err) {
    res.json(err);
  }
};

exports.findProductByPrice = async (req, res) => {
  try {
    let price = parseFloat(req.params.price);
    let products = await Product.find({ price: { $gt: price } });
    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found with price greater than the given value' });
    }
    res.json(products);
  } catch (err) {
    res.json(err);
  }
};
