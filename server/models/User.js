const { Schema, model } = require("mongoose");
const UserOrder = require("./UserOrder");
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userOrders: [UserOrder.schema],
});

const User = model("User", userSchema);

module.exports = User;
