import { gql } from "@apollo/client";

// type Mutation {
//     addUser(name: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth
//     addUserOrder(items: [ID]!): UserOrder
//   }

//   `;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
