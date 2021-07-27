const { Router } = require("express");

const {
  categoriesController,
} = require("../controllers/categories.controller");

const router = Router();

router.get("/categories", categoriesController.getAllCategories);
router.post("/category", categoriesController.addCategory);
router.patch("/category/:id", categoriesController.editCategory);
router.delete("/category/:id", categoriesController.deleteCategory);

module.exports = router;
