const Processes = require("../models/Processes");
 
const getProcesses = async (req, res) => {
 try {
   const processes = await Processes.find({});
   res.json(processes);
   console.log("processes try success")
 } catch (error) {
   console.error(error);
   res.status(500).json({ message: "Server Error" });
   console.log("processes try error")
 }
};
 
const getProcessesById = async (req, res) => {
 try {
   const process = await Processes.findById(req.params.id);
 
   res.json(process);
 } catch (error) {
   console.error(error);
   res.status(500).json({ message: "Server Error" });
 }
};
 
module.exports = {
 getProcesses,
 getProcessesById,
};
 

