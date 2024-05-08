const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
  total: { type: Number, required: true },
});

const Cart = model("Cart", cartSchema);

module.exports = Cart;
