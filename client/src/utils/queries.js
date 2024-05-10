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




// export const QUERY_CHECKOUT = gql`
//   query getCheckout($products: [ID]!) {
//     checkout(products: $products) {
//       session
//     }
//   }
// `;

// export const QUERY_ALL_ITEMS = gql`
//   {
//     products {
//       _id
//       name
//       description
//       price
//       quantity
//       category {
//         name
//       }
//     }
//   }
// `;



