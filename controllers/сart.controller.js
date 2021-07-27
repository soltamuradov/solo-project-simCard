// const Cart = require("../models/Cart.model");
//
// module.exports.cartController = {
//   getCart: async (req, res) => {
//     try {
//       const cart = await Cart.find();
//       return res.json(Cart);
//     } catch (e) {
//       return res.status(400).json({
//         error: e.toString(),
//       });
//     }
//   },
//
//   addCart: async (req, res) => {
//     const { productItems } = req.body;
//
//     try {
//       const cart = await Cart.create({
//         productItems,
//       });
//       return res.json(cart);
//     } catch (e) {
//       return res.status(400).json({
//         error: e.toString(),
//       });
//     }
//   },
//
//   addProductInCart: async (req, res) => {
//     const cart = await Cart.findById(req.params.id);
//     const productId = req.body.productId;
//     try {
//       const product = {
//         productId: productId,
//       };
//       cart.productItems.push(product);
//       cart.save();
//       return res.json("Продукт добавлен в корзину");
//     } catch (e) {
//       return res.status(400).json({
//         error: e.toString(),
//       });
//     }
//   },
//
//   deleteProductFromCart: async (req, res) => {
//     const cart = await Cart.findById(req.params.id);
//     try {
//       cart.productItems.forEach((item, key) => {
//         if (String(item.id) === req.params.id) {
//           cart.productItems(key, 1);
//         }
//       });
//       cart.save();
//       return res.json(cart);
//     } catch (e) {
//       return res.status(400).json({
//         error: e.toString(),
//       });
//     }
//   },
// };
