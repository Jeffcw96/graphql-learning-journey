import { gql } from "apollo-server";

export const typeDefs = gql`
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
    nationality: String!
  }
`;
