const express = require("express");
const router = express.Router();
const {
    getPort,
} = require("../controller/robotControllers");

router.get("/", getPort);

module.exports = router;