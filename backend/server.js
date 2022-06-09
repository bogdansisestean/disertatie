// require("dotenv").config();
const express = require("express");
const processesRoutes = require("./routes/processesRoutes");
const usersRoutes = require("./routes/usersRoutes");
const robotRoutes = require("./routes/robotRoutes")
const connectDB = require("./config/db");
const { use } = require("./routes/processesRoutes");


(async function () {
  await connectDB();

  const app = express();

  app.use(express.json());

  app.get("/", (req, res) => {
    console.log("checkpoint app.get");
    res.json({ message: "API running..." });
  });

  app.use("/api/processes", processesRoutes);

  app.use("/api/users", usersRoutes);

  app.use("/robot/data", robotRoutes)

  const PORT = 
  // process.env.PORT || 
  5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();
