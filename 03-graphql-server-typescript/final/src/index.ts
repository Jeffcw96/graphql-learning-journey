import { ApolloServer } from "apollo-server";
import { resolvers } from "./schema/resolvers";
import { typeDefs } from "./schema/type-defs";

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

server.listen().then(({ url }) => {
  console.log(`GRAPHQL server is running at ${url}`);
});
