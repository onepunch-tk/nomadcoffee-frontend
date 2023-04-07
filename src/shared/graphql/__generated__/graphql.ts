/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  shops?: Maybe<Array<CoffeeShop>>;
  slug: Scalars['String'];
  totalShops: Scalars['Int'];
};

export type CoffeeShop = {
  __typename?: 'CoffeeShop';
  categories?: Maybe<Array<Category>>;
  id: Scalars['Int'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  photos?: Maybe<Array<CoffeeShopPhoto>>;
  user?: Maybe<User>;
};

export type CoffeeShopPhoto = {
  __typename?: 'CoffeeShopPhoto';
  id: Scalars['Int'];
  shop: CoffeeShop;
  url: Scalars['String'];
};

export type CreateResult = {
  __typename?: 'CreateResult';
  result: Result;
  user?: Maybe<User>;
};

export type LoginResult = {
  __typename?: 'LoginResult';
  result: Result;
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount?: Maybe<CreateResult>;
  createCoffeeShop?: Maybe<CreateCoffeeShopResult>;
  editCoffeeShop?: Maybe<Result>;
  editProfile?: Maybe<Result>;
  login: LoginResult;
  toggleFollowUser?: Maybe<Result>;
};


export type MutationCreateAccountArgs = {
  email: Scalars['String'];
  githubUsername?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateCoffeeShopArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  name: Scalars['String'];
  photos?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
};


export type MutationEditCoffeeShopArgs = {
  categories?: InputMaybe<Array<Scalars['String']>>;
  coffeeShopId: Scalars['Int'];
  photos?: InputMaybe<Array<Scalars['Upload']>>;
};


export type MutationEditProfileArgs = {
  avatar?: InputMaybe<Scalars['Upload']>;
  githubUsername?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationToggleFollowUserArgs = {
  username: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  searchUsers?: Maybe<Array<User>>;
  seeCategories?: Maybe<Array<Category>>;
  seeCategory: SeeCategoryResult;
  seeCoffeeShop?: Maybe<SeeCoffeeShopResult>;
  seeCoffeeShops?: Maybe<Array<Maybe<CoffeeShop>>>;
  seeProfile?: Maybe<User>;
};


export type QuerySearchUsersArgs = {
  keyword: Scalars['String'];
  lastId?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeCategoriesArgs = {
  cursor: Scalars['Int'];
  keyword: Scalars['String'];
};


export type QuerySeeCategoryArgs = {
  cursor: Scalars['Int'];
  id: Scalars['Int'];
};


export type QuerySeeCoffeeShopArgs = {
  id: Scalars['Int'];
};


export type QuerySeeCoffeeShopsArgs = {
  cursor: Scalars['Int'];
};


export type QuerySeeProfileArgs = {
  username: Scalars['String'];
};

export type Result = {
  __typename?: 'Result';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type SeeCategoryResult = Category | Result;

export type SeeCoffeeShopResult = CoffeeShop | Result;

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  createAt: Scalars['String'];
  email: Scalars['String'];
  followers?: Maybe<Array<User>>;
  followings?: Maybe<Array<User>>;
  githubUsername?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isFollowing: Scalars['Boolean'];
  isMe: Scalars['Boolean'];
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  totalPage: Scalars['Int'];
  updateAt: Scalars['String'];
  username: Scalars['String'];
};


export type UserFollowersArgs = {
  lastId: Scalars['Int'];
  username: Scalars['String'];
};


export type UserFollowingsArgs = {
  followingPage: Scalars['Int'];
  username: Scalars['String'];
};

export type CreateCoffeeShopResult = CoffeeShop | Result;

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResult', token?: string | null, result: { __typename?: 'Result', ok: boolean, error?: string | null } } };

export type CreateAccountMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  githubUsername: Scalars['String'];
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount?: { __typename?: 'CreateResult', user?: { __typename?: 'User', id: number, username: string } | null, result: { __typename?: 'Result', ok: boolean, error?: string | null } } | null };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const CreateAccountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAccount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"location"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"githubUsername"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAccount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"location"},"value":{"kind":"Variable","name":{"kind":"Name","value":"location"}}},{"kind":"Argument","name":{"kind":"Name","value":"githubUsername"},"value":{"kind":"Variable","name":{"kind":"Name","value":"githubUsername"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"result"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}}]} as unknown as DocumentNode<CreateAccountMutation, CreateAccountMutationVariables>;