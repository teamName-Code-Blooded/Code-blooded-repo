const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String },
});

const Item = model("Item", itemSchema);

module.exports = Item;
