const Game = require("../models/gameModel");

// Create a product
exports.createProduct = async (req, res) => {
  try {
    const product = await Game.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Game.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get product by gameId
exports.getProductByGameId = async (req, res) => {
  try {
    const { gameId } = req.params;
    const product = await Game.findOne({ gameId: gameId });

    if (!product) {
      return res
        .status(404)
        .json({ message: `Cannot find product with gameId ${gameId}` });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Update a product by gameId
exports.updateProduct = async (req, res) => {
  try {
    const { gameId } = req.params;
    const product = await Game.findOneAndUpdate({ gameId: gameId }, req.body, {
      new: true,
    });

    if (!product) {
      return res
        .status(404)
        .json({ message: `Cannot find product with gameId ${gameId}` });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// Delete a product by gameId
exports.deleteProduct = async (req, res) => {
  try {
    const { gameId } = req.params;
    const product = await Game.findOneAndDelete({ gameId: gameId });

    if (!product) {
      return res
        .status(404)
        .json({ message: `Cannot find product with gameId ${gameId}` });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
