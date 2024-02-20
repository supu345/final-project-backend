const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    categoryName: { type: String, required: true },
    img: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const categoryModel = mongoose.model("categories", dataSchema);
module.exports = categoryModel;
