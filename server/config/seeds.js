const db = require("./connection");
const { User, Item, Category } = require("../models");

db.once("open", async () => {
  const categories = await Category.insertMany([
    { name: "Coffee Mugs" },
    { name: "Clothing" },
    { name: "Accessories" },
  ]);

  console.log("categories seeded");

  const items = await Item.insertMany([
    {
      name: "Code Blooded T-SHIRT",
      description:
        "100% cotton Rib-Knit Crew Neck Double needle sleeves and hem",
      image: "./images/WhiteTshirtProd.png",
      price: 25.0,
      category: "Clothing",
      category: categories[1]._id,
    },
    // {
    //   name: "EMBER MASCOT STICKERS",
    //   description:
    //     "Meet the friendly neighborhood Tomster. We love him, and you should too... ",
    //   // category: "sticker",
    //   image: "./images/WhiteHoodieProd.png",
    //   price: 6.0,
    //   category: categories[3]._id,
    // },
    {
      name: "Code Blooded Hoodie",
      description:
        "Introducing our premium Cotton Comfort Hoodie, the ultimate blend of style, comfort, and versatility. Crafted with the finest quality cotton, this hoodie is designed to be your go-to piece for all seasons",
      image: "./images/WhiteHoodieProd.png",
      category: "Clothing",
      price: 50.0,
      category: categories[1]._id,
    },
    {
      name: "Code Blooded Coffee MUG",
      description:
        "Impress your coffee dates with this sleek, glossy, Rust Ferris mug! It's the perfect way to show off your caffeinated sophistication.",
      image: "./images/MugProd.png",
      category: "Coffee Mug",
      price: 20.0,
      category: categories[0]._id,
    },
    {
      name: "Code Blooded Coffee MUG",
      description:
        "Impress your coffee dates with this sleek, glossy, Rust Ferris mug! It's the perfect way to show off your caffeinated sophistication.",
      image: "./images/MugProd_2.png",
      category: "Coffee Mug",
      price: 20.0,
      category: categories[0]._id,
    },
    {
      name: "Code Blooded Water Bottle",
      description:
        "Durable and stylish Stainless Steel Water Bottle, the perfect companion for your hydration needs wherever life takes you",
      image: "./images/WaterBottleProd.png",
      category: "Accessories",
      price: 20.0,
      category: categories[2]._id,
    },
    {
      name: "Code Blooded Ground Coffee",
      description:
        "Indulge in the rich aroma and bold flavor of our meticulously crafted Ground Coffee, a true testament to the artistry of coffee roasting.",
      image: "./images/CoffeeProd.png",
      category: "Coffee Mug",
      price: 20.0,
      category: categories[0]._id,
    }



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
