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
    typeNumberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TypeNumber",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
