const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemsSchema = new Schema(
  {
    quantity: { type: Number, required: true },
    images: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

const Items = mongoose.model("Items", itemsSchema);
module.exports = Items;