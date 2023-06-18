import { Users, Sports } from "../data";

export const resolvers = {
  Query: {
    users: () => {
      return Users;
    },
    user: (_parent, args) => {
      const id = args.id;
      return Users.find((user) => Number(user.id) === Number(id));
    },
  },
  User: {
    favouriteSports: () =>
      Sports.filter(
        (sport) => sport.minimumPlayers >= 2 && sport.maximumPlayers <= 4
      ),
  },
  Mutation: {
    // The object key store in args will be depends on what we define in type-def. If we name it as input then it will be args.input
    createUser: (_parent, args) => {
      const id = Users[Users.length - 1].id + 1;
      const user = {
        ...args.input,
        id,
      };
      Users.push(user);
      return user;
    },
    updateUser: (_parent, args) => {
      const { id, name, age } = args.input;
      Users.forEach((user) => {
        if (Number(user.id) === Number(id)) {
          user.name = name;
          user.age = age;
        }
      });
      return Users;
    },
  },
};
