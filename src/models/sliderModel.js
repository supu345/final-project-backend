const mongoose = require("mongoose");

const dataSchema = mongoose.Schema(
  {
    img: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const sliderModel = mongoose.model("sliders", dataSchema);
module.exports = sliderModel;
