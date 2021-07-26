const mongoose = require("mongoose");

const typeNumberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const TypeNumber = mongoose.model("TypeNumber", typeNumberSchema);

module.exports = TypeNumber;
