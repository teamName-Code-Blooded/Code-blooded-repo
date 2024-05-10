const { User, Item, UserOrder } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getUsers: async () => {
      return User.find().populate({
        path: "userOrders",
        populate: { path: "items" },
      });
    },
    getItems: async () => {
      return Item.find();
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      // generate token
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      // Generate token
      const token = signToken(user);
      return { token, user };
    },
    addUserOrder: async (parent, { items }, context) => {
      // Confirm user is logged in/authorized
      // Create a new userOrder
      // Push items to a user for the orders field
      if (context.user) {
        const userOrder = new UserOrder({ items });

        // Add order to specific user - user_id
        // push order to user
        await User.findByIdAndUpdate(context.user._id, {
          $push: { userOrders: userOrder },
        });
        return userOrder;
      }
    },
  },
};

module.exports = resolvers;
