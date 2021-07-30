const { Router } = require('express');

const { cartController } = require('../controllers/сart.controller');

const router = Router();

router.get('/cart', cartController.getCart);
router.post('/addCart', cartController.addCart);
router.post('/addInCart/:id', cartController.addProductInCart);
router.delete('/productFromCart/:id', cartController.deleteProductFromCart);

module.exports = router;
