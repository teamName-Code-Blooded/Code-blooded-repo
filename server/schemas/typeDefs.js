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
    category: Category
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

  type Category {
    _id: ID
    name: String
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
  addUserOrder(items: [ID]!): Item
}
  
`;

module.exports = typeDefs;
