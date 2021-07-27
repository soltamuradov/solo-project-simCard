const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    img: String,
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
