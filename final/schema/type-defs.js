const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User!]!
    user(id: ID!): User!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(input: UpdateUserInput!): [User!]
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    nationality: String!
    friends: [User!]
    favouriteSports: [Sport!]
  }

  type Sport {
    id: ID!
    name: String!
    minimumPlayers: Int!
    maximumPlayers: Int!
  }

  input CreateUserInput {
    name: String!
    age: Int!
    nationality: String!
  }

  input UpdateUserInput {
    id: ID!
    name: String!
    age: Int!
  }
`;

module.exports = {
  typeDefs,
};
