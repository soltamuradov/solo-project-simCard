const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productsItems: Array,
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
