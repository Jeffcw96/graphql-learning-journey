export const IdentityGroup = {
  Human: 'HUMAN',
  Robot: 'ROBOT',
} as const;

export const Human = {
  name: 'Jeff',
  age: 50,
  group: IdentityGroup.Human,
};

export const Robot = {
  name: 'My robot',
  serialNumber: '111casd-23asd-5123',
  group: IdentityGroup.Robot,
};
