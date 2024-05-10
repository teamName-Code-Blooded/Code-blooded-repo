import { gql } from "@apollo/client";

export const QUERY_ITEMS = gql`
  query GetItems {
    getItems {
      _id
      name
      price
      description
      image
      category {
        _id
        name
      }
    }
  }
`;

// export const QUERY_PRODUCTS = gql`
//   query getProducts($category: ID) {
//     products(category: $category) {
//       _id
//       name
//       description
//       price
//       quantity
//       image
//       category {
//         _id
//       }
//     }
//   }
// `;
