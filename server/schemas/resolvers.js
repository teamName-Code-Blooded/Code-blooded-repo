const { User, Item } = require("../models");

const resolvers = {
  Query: {
    getUsers: async () => {
      return User.find();
    },
    getItems: async () => {
      return Item.find();
    },
  },
};

module.exports = resolvers;
