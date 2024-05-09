const { User, Item, UserOrder } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    getUsers: async () => {
      return User.find();
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

    // addOrder: async (parent, args) => {
    //   await UserOrder.create(args.items);
    //   return UserOrder;
    // },
  },
};

module.exports = resolvers;
