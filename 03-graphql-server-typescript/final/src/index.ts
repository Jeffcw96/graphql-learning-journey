import { ApolloServer } from "apollo-server";
import { schema } from "./modules";

const server = new ApolloServer({
  schema: schema,
});

server.listen().then(({ url }) => {
  console.log(`GRAPHQL server is running at ${url}`);
});
