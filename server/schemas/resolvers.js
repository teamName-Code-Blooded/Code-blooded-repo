const { User } = require("../models");

const resolvers = {
  Query: {
    getUsers: async () => {
      return User.find();
    },
  },
};

module.exports = resolvers;
