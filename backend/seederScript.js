require("dotenv").config();
 
const usersData = require("./data/dummy-users");
const processesData = require("./data/processes")
const connectDB = require("./config/db");
const Users = require("./models/Users");
const Processes = require("./models/Processes")
 
const importData = async () => {
 try {
   await Processes.deleteMany({});
 
   await Processes.insertMany(processesData);
 
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
 
 

