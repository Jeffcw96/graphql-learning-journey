const { Users, Sports } = require("../data");

const resolvers = {
  Query: {
    users: () => {
      return Users;
    },
    // Add user query by id resolver
  },
  // Add favouriteSport custom query resolver for User type
  // Add mutation to create and update user
};

module.exports = { resolvers };
