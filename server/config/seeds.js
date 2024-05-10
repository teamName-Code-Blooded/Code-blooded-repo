const db = require("./connection");
const { User, Item, Category } = require("../models");

db.once("open", async () => {
  const categories = await Category.insertMany([
    { name: "Shirts" },
    { name: "Mugs" },
    { name: "Computers" },
    { name: "Stickers" },
  ]);

  console.log("categories seeded");

  const items = await Item.insertMany([
    {
      name: "RUST FERRIS T-SHIRT",
      description:
        "100% cotton Rib-Knit Crew Neck Double needle sleeves and hem",
      category: "shirt",
      price: 20.0,
      category: categories[0]._id,
    },
    {
      name: "EMBER MASCOT STICKERS",
      description:
        "Meet the friendly neighborhood Tomster. We love him, and you should too... ",
      category: "sticker",
      price: 6.0,
      category: categories[3]._id,
    },
    {
      name: "MSI Codex R2 C13NUC5-218US Gaming PC",
      description:
        "Intel Core i5 13400F (1.8GHz) Processor 16GB DDR5-5600 RAM NVIDIA GeForce RTX 4060 Graphics Card1TB M.2 NVMe Gen4 SSD 2.5GbE LAN, WiFi 7 (802.11be), Bluetooth 5.4",
      category: "computer",
      price: 1999.99,
      category: categories[2]._id,
    },
    {
      name: "RUST FERRIS MUG",
      description:
        "Impress your coffee dates with this sleek, glossy, Rust Ferris mug! It's the perfect way to show off your caffeinated sophistication.",
      category: "mug",
      price: 12.0,
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
