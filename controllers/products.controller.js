const Product = require('../models/Product.model');
const Category = require('../models/Category.model');

module.exports.productsController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find()
        .sort({ createdAt: -1 })
        .populate('categoryId');
      return res.json(products);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  getProductsByCategoryId: async (req, res) => {
    const { id } = req.params;
    try {
      const productsByCategory = await Product.find({
        categoryId: id,
      })
        .sort({ createdAt: -1 })
        .populate('categoryId');

      return res.json(productsByCategory);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  addProduct: async (req, res) => {
    const { name, number, price, categoryId } = req.body;
    if (!name) {
      return res.status(400).json({
        error: 'Укажите название сим-карты',
      });
    }
    if (!number) {
      return res.status(400).json({
        error: 'Укажите номер карты',
      });
    }
    if (!price || price < 0) {
      return res.status(400).json({
        error: 'Укажите цену сим-карты',
      });
    }

    try {
      const createdProduct = await Product.create({
        name,
        number,
        price,
        categoryId,
      });

      const product = await Product.findById(createdProduct._id).populate(
        'categoryId'
      );

      return res.json(product);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  deleteProduct: async (req, res) => {
    const { id } = req.params;

    try {
      const product = await Product.findByIdAndRemove(id);
      if (!product) {
        return res.status(400).json({
          error: 'Не удалось удалить сим-карту',
        });
      }
      return res.json({
        message: 'Сим-карта удалена',
      });
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  editProduct: async (req, res) => {
    const { name, number, price } = req.body;
    const { id } = req.params;

    if (!name) {
      return res.status(400).json({
        error: 'Укажите название сим-карты',
      });
    }
    if (!number) {
      return res.status(400).json({
        error: 'Укажите номер сим-карты',
      });
    }
    if (!price || price < 0) {
      return res.status(400).json({
        error: 'Укажите цену сим-карты',
      });
    }

    try {
      const product = await Product.findByIdAndUpdate(
        id,
        { name, number, price },
        { new: true }
      );
      if (!product) {
        return res.status(400).json({
          error: 'Не удалось изменить данные',
        });
      }
      return res.json(product);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
