// require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const usersRoutes = require("./routes/usersRoutes");
const connectDB = require("./config/db");

(async function () {
  await connectDB();

  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    console.log("checkpoint app.get");
    res.json({ message: "API running..." });
  });

  app.use("/api/products", productRoutes);

  app.use("/api/users", usersRoutes);

  const PORT = 
  // process.env.PORT || 
  5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();
