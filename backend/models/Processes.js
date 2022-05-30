const mongoose = require("mongoose");
const { createTrue } = require("typescript");

const singleRobotSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  picture: {
    type: String,
    required: true,
  },
  energyConsumption: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  sensor1: {
    type: Number,
    required: true,
  },
  sensor2: {
    type: Number,
    required: true,
  },
  sensor3: {
    type: Number,
    required: true,
  },
});

// const robotsSchema = mongoose.Schema({
//   robots: singleRobotSchema
// });

const processesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  robot: singleRobotSchema,
});

const Processes = mongoose.model("processes", processesSchema);

module.exports = Processes;
