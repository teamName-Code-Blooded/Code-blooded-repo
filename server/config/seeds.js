const db = require("./connection");
const { User, Item } = require("../models");

db.once("open", async () => {
  const users = await User.insertMany([
    { name: "Ben", email: "ben2332@gmail.com", password: "supersecret" },
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

  const items = await Item.insertMany([
    {
      name: "RUST FERRIS T-SHIRT",
      description:
        "100% cotton Rib-Knit Crew Neck Double needle sleeves and hem",
      category: "shirt",
      price: 20.0,
    },
    {
      name: "EMBER MASCOT STICKERS",
      description:
        "Meet the friendly neighborhood Tomster. We love him, and you should too... ",
      category: "sticker",
      price: 6.0,
    },
    {
      name: "MSI Codex R2 C13NUC5-218US Gaming PC",
      description:
        "Intel Core i5 13400F (1.8GHz) Processor 16GB DDR5-5600 RAM NVIDIA GeForce RTX 4060 Graphics Card1TB M.2 NVMe Gen4 SSD 2.5GbE LAN, WiFi 7 (802.11be), Bluetooth 5.4",
      category: "computer",
      price: 1999.99,
    },
    {
      name: "RUST FERRIS MUG",
      description:
        "Impress your coffee dates with this sleek, glossy, Rust Ferris mug! It's the perfect way to show off your caffeinated sophistication.",
      category: "mug",
      price: 12.0,
    },
  ]);

  console.log("Items seeded");

  process.exit();
});
