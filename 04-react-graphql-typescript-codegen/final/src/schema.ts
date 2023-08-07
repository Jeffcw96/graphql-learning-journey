export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateSportInput = {
  maximumPlayers: Scalars['Int']['input'];
  minimumPlayers: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type CreateUserInput = {
  age: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  nationality: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createSport?: Maybe<Sport>;
  createUser?: Maybe<User>;
  updateSport?: Maybe<Array<Sport>>;
  updateUser?: Maybe<Array<User>>;
};


export type MutationCreateSportArgs = {
  input: CreateSportInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationUpdateSportArgs = {
  input: UpdateSportInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  sport: Sport;
  sports: Array<Sport>;
  user: User;
  users: Array<User>;
};


export type QuerySportArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type Sport = {
  __typename?: 'Sport';
  id: Scalars['ID']['output'];
  maximumPlayers: Scalars['Int']['output'];
  minimumPlayers: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type UpdateSportInput = {
  id: Scalars['ID']['input'];
  maximumPlayers: Scalars['Int']['input'];
  minimumPlayers: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type UpdateUserInput = {
  age: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  nationality: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  age: Scalars['Int']['output'];
  friends?: Maybe<Array<User>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nationality: Scalars['String']['output'];
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, age: number, nationality: string }> };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, name: string, age: number, nationality: string } | null };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: Array<{ __typename?: 'User', id: string, name: string, age: number, nationality: string }> | null };
