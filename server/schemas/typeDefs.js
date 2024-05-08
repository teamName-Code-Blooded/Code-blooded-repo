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
    userId:User
    items:[Item]
    total:Int
  }



  type Query {
getUsers:[User]
getItems:[Item]
  }

  
  
`;

module.exports = typeDefs;
