const typeDefs = `
 type Category {
    _id: ID
    name: String
  }
  type Item {
    _id: ID
    name:String
    price:Float
    description: String
    category: Category
  }
    type UserOrder{
    _id:ID
    items:[Item]
  }
   type User {
    _id: ID
    name: String
    email:String
    password:String
    userOrders:[UserOrder]
  }
    type Auth{
    token: ID!
    user: User
  }

type Query {
  getUsers:[User]
  getItems:[Item]
  }

type Mutation {
  addUser(name: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addUserOrder(items: [ID]!): UserOrder
}
  
`;

module.exports = typeDefs;
