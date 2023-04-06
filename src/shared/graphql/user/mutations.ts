import {gql} from "../__generated__";

export const LOGiN = gql(/* GraphQL */ `
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
