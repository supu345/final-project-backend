const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    brandName: { type: String, required: true },
    img: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const brandModel = mongoose.model("brands", dataSchema);
module.exports = brandModel;
