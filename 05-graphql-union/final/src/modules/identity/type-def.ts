import { gql } from 'apollo-server';

export const typeDefs = gql`
  interface Identity {
    group: String!
  }

  type Human implements Identity {
    name: String!
    age: Int!
    group: String!
  }

  type Robot implements Identity {
    serialNumber: String!
    group: String!
  }

  union IdentityResult = Human | Robot

  type Query {
    identity(type: String!): IdentityResult!
  }
`;
