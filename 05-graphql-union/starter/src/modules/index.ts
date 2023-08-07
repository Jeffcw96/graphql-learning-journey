import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { identity } from './identity';

const modules = [identity];

const resolvers = mergeResolvers(modules.flatMap((m) => (m.resolvers ? [m.resolvers] : [])));

export const typeDefs = mergeTypeDefs(modules.map((m) => m.typeDefs));

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});
