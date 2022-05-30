const express = require("express");
const router = express.Router();
const {
  getProcesses,
  getProcessesById,
} = require("../controller/processesControllers");

router.get("/", getProcesses);
router.get("/:id", getProcessesById);

module.exports = router;