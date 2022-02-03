require("dotenv").config();

const productData = require("./data/products");
const usersData = require("./data/dummy-users");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const Users = require("./models/Users");

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    await Users.deleteMany({});

    await Users.insertMany(usersData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

(async function () {
  await connectDB();
  await importData();
})();
