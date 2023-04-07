import { gql } from "../__generated__";

export const LOGIN = gql(/* GraphQL */ `
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      result {
        ok
        error
      }
    }
  }
`);

export const CREATE_ACCOUNT = gql(/* GraphQL */ `
  mutation CreateAccount(
    $username: String!
    $email: String!
    $password: String!
    $name: String
    $location: String
    $githubUsername: String!
  ) {
    createAccount(
      username: $username
      email: $email
      password: $password
      name: $name
      location: $location
      githubUsername: $githubUsername
    ) {
      user {
        id
        username
      }
      result {
        ok
        error
      }
    }
  }
`);
