const typeDefs = `
  type User {
    _id: ID
    name: String
    email:String
    password:String
  }
  type Item {
    _id: ID
    name:String
    price:Float
    description: String
    category:String
  }
  type Cart {
    _id: ID
    userId:User
    items:[Item]
    total:Int
  }
  type UserOrder{
    _id:ID
    items:[Item]
    total:Int
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
}
  
`;

module.exports = typeDefs;
