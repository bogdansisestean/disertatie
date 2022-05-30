// require("dotenv").config();
const express = require("express");
const usersRoutes = require("./routes/usersRoutes");
const processesRoutes = require("./routes/processesRoutes")
const connectDB = require("./config/db");

(async function () {
  await connectDB();

  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {

    res.json({ message: "API running..." });
  });

  app.use("/api/processes", processesRoutes);

  app.use("/api/users", usersRoutes);


  const PORT = 
  // process.env.PORT || 
  5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();
