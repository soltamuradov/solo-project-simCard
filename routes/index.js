const { Router } = require("express");
const productsRouter = require("./products.route");
const categoriesRouter = require("./category.route");
const router = Router();

router.use(productsRouter, categoriesRouter);

module.exports = router;
