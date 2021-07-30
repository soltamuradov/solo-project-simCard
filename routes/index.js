const { Router } = require('express');
const productsRouter = require('./products.route');
const categoriesRouter = require('./category.route');
const cartRouter = require('./cart.route');
const router = Router();

router.use(productsRouter, categoriesRouter, cartRouter);

module.exports = router;
