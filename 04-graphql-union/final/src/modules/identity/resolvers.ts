import { Human, Robot } from 'src/data';
import { Resolvers } from '../schema';

export const resolvers: Resolvers = {
  Query: {
    identity: (_parent, args) => {
      const type = args.type;
      return type === 'Human' ? Human : Robot;
    },
  },
  IdentityResult: {
    __resolveType(obj) {
      switch (obj.group) {
        case 'HUMAN':
          return 'Human';
        case 'ROBOT':
          return 'Robot';
        default:
          throw new Error('Unexpected identity group');
      }
    },
  },
};
