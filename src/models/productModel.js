const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    productName: { type: String, required: true },
    image: { type: String, required: true },
    des: { type: String, required: true },
    brandID: { type: mongoose.Schema.Types.ObjectId, required: true },
    categoryID: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { versionKey: false, timestamps: true }
);

const categoryModel = mongoose.model("products", dataSchema);
module.exports = categoryModel;
