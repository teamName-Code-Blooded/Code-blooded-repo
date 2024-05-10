const { Schema, model } = require("mongoose");

const userOrderSchema = new Schema({
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item",
    },
  ],
});

const UserOrder = model("UserOrder", userOrderSchema);

module.exports = UserOrder;
