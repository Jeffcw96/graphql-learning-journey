const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User!]!
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    nationality: String!
    friends: [User!]
  }
`;

module.exports = {
  typeDefs,
};
