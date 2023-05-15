const { Users } = require("../data");

const resolvers = {
  Query: {
    users: () => {
      return Users;
    },
  },
};

module.exports = { resolvers };
