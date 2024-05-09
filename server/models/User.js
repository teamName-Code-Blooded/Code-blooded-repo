const { Schema, model } = require("mongoose");
const Item = require("./Item");
const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  orders: [Item.schema],
});

const User = model("User", userSchema);

module.exports = User;
