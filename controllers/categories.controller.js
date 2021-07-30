const Category = require('../models/Category.model');

module.exports.categoriesController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      return res.json(categories);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
  addCategory: async (req, res) => {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        error: 'Укажите тип номера',
      });
    }
    try {
      const category = await Category.create({
        name,
      });
      return res.json(category);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },

  deleteCategory: async (req, res) => {
    const { id } = req.params;

    try {
      const category = await Category.findByIdAndRemove(id);
      if (!category) {
        return res.status(400).json({
          error: 'Не удалось удалить категорию',
        });
      }
      return res.status(400).json({
        message: 'Тип удален',
      });
    } catch (e) {}
  },

  editCategory: async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    if (!name) {
      return res.status(400).json({
        error: 'Укажите тип номера',
      });
    }

    try {
      const category = await Category.findByIdAndUpdate(
        { _id: id },
        { name },
        { new: true }
      );
      if (!category) {
        return res.status(400).json({
          error: 'Не удалось изменить тип номера',
        });
      }
      return res.json(category);
    } catch (e) {
      return res.status(400).json({
        error: e.toString(),
      });
    }
  },
};
