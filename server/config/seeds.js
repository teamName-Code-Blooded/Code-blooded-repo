const db = require("./connection");
const { User, Item, Category } = require("../models");

db.once("open", async () => {
  const categories = await Category.insertMany([
    { name: "T-Shirt" },
    { name: "White Hoodie" },
    { name: "Tote Bag" },
    { name: "Water Bottle" },
    { name: "Coffee Mug" },
    { name: "Coffee" },
  ]);

  console.log("categories seeded");

  const items = await Item.insertMany([
    {
      name: "CodeBlooded T-Shirt",
      description:
        "You will proudly wear this 100% cotton T-shirt with rib-knit crew neck with double-needle sleeves and hem, sporting the CodeBlooded logo!",
      category: "shirt",
      price: 18.99,
      category: categories[0]._id,
    },
    {
      name: "CodeBlooded White Hoodie",
      description:
        "You'll be a hit with this super soft 100% cotton hoodie with the sought after CodeBlooded logo!",
      category: "hoodie",
      price: 36.99,
      category: categories[3]._id,
    },
    {
      name: "CodeBlooded Tote Bag",
      description:
        "Versatile heavy duty large cotton canvas tote bag with the famous CodeBlooded logo!",
      category: "toteBag",
      price: 24.99,
      category: categories[2]._id,
    },
    {
      name: "CodeBlooded Water Bottle",
      description:
        "Your stainless steel lined novelty water bottle, complete with the very cool CodeBlooded logo will be the talk of the gym!",
      category: "waterBottle",
      price: 15.99,
      category: categories[1]._id,
    },
    {
      name: "CodeBlooded Coffee Mug",
      description:
        "Impress your coworkers with this sleek, glossy, CodeBlooded coffee mug! It's the perfect way to show off your caffeinated sophistication and computer savy!",
      category: "coffeeMug",
      price: 12.99,
      category: categories[1]._id,
    },
    {
      name: "CodeBlooded Coffee",
      description:
        "You'll love this dark roast coffee; the perfect match with CodeBlooded's exclusive coffee mug!",
      category: "coffee",
      price: 12.99,
      category: categories[1]._id,
    },
  ]);

  console.log("Items seeded");
  const users = await User.insertMany([
    {
      name: "Ben",
      email: "ben2332@gmail.com",
      password: "supersecret",
      userOrders: [
        {
          items: [items[0].id, items[1].id],
        },
      ],
    },
    {
      name: "Phyllis",
      email: "phyllis5632@gmail.com",
      password: "supersecret",
    },
    {
      name: "Victor",
      email: "victor3256@getMaxListeners.com",
      password: "supersecret",
    },
    {
      name: "Anthony",
      email: "tankjhkf541@gmail.com",
      password: "supersecret",
    },
  ]);

  console.log("Users seeded");

  process.exit();
});

// const models = require('../models');
// const db = require('../config/connection');

// module.exports = async (modelName, collectionName) => {
//   try {
//     let modelExists = await models[modelName].db.db.listCollections({
//       name: collectionName
//     }).toArray()

//     if (modelExists.length) {
//       await db.dropCollection(collectionName);
//     }
//   } catch (err) {
//     throw err;
//   }
// }
// await cleanDB('Tech', 'teches');
