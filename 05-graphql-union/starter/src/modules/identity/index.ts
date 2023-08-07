import { resolvers } from './resolvers';
import { typeDefs } from './type-def';

export const identity = {
  resolvers: resolvers,
  typeDefs: [typeDefs],
};
