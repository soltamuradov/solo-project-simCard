const Cart = require('../models/Cart.model');

module.exports.cartController = {
  getCart: async (req, res) => {
    try {
      const cart = await Cart.find().populate({
        path: 'productsItems',
        model: 'Cart',
        populate: {
          path: 'product',
          model: 'Product',
          populate: {
            path: 'categoryId',
            model: 'Category',
          },
        },
      });
      return res.json(cart);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
  addCart: async (req, res) => {
    const { productItems } = req.body;

    try {
      const cart = await Cart.create({
        productItems,
      });
      return res.json(cart);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  addProductInCart: async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
      const cart = await Cart.updateOne(
        { _id: id },
        { $addToSet: { productsItems: data } }
      );
      return res.json(cart);
    } catch (e) {
      console.log(e.message);
    }
  },

  deleteProductFromCart: async (req, res) => {
    const cart = await Cart.findById(req.params.id);
    try {
      cart.productItems.forEach((item, key) => {
        if (String(item.id) === req.params.id) {
          cart.productItems(key, 1);
        }
      });
      cart.save();
      return res.json(cart);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
