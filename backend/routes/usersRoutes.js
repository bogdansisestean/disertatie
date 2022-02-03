const express = require("express");
const router = express.Router();

const { getAllUsers, getUserByName } = require("../controller/usersControllers");

router.get("/", getAllUsers);
// router.get("/", getUserByName)

module.exports = router;
