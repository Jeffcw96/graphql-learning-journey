import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    sports: [Sport!]!
    sport(id: ID!): Sport!
  }

  type Mutation {
    createSport(input: CreateSportInput!): Sport
    updateSport(input: UpdateSportInput!): [Sport!]
  }

  type Sport {
    id: ID!
    name: String!
    minimumPlayers: Int!
    maximumPlayers: Int!
  }

  input CreateSportInput {
    name: String!
    minimumPlayers: Int!
    maximumPlayers: Int!
  }

  input UpdateSportInput {
    id: ID!
    name: String!
    minimumPlayers: Int!
    maximumPlayers: Int!
  }
`;
