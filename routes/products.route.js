const { Router } = require("express");
const { productsController } = require("../controllers/products.controller");

const router = Router();

router.get("/products", productsController.getAllProducts);
router.post("/product", productsController.addProduct);
router.patch("/product/:id", productsController.editProduct);
router.delete("/product/:id", productsController.deleteProduct);

module.exports = router;
