import { Sports } from "../../data";

export const resolvers = {
  Query: {
    sports: () => {
      return Sports;
    },
    sport: (_parent, args) => {
      const id = args.id;
      return Sports.find((sport) => Number(sport.id) === Number(id));
    },
  },
  Mutation: {
    // The object key store in args will be depends on what we define in type-def. If we name it as input then it will be args.input
    createSport: (_parent, args) => {
      const id = Sports[Sports.length - 1].id + 1;
      const sport = {
        ...args.input,
        id,
      };
      Sports.push(sport);
      return sport;
    },
    updateSport: (_parent, args) => {
      const { id, name, minimumPlayers, maximumPlayers } = args.input;
      Sports.forEach((sport) => {
        if (Number(sport.id) === Number(id)) {
          sport.name = name;
          sport.minimumPlayers = minimumPlayers;
          sport.maximumPlayers = maximumPlayers;
        }
      });
      return Sports;
    },
  },
};
