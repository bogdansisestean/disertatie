const mongoose = require("mongoose");
const { createTrue } = require("typescript");

const endEffectorsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  }
})

const singleRobotSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  picture: {
    type: String,
    required: true,
  },
  description: {
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
  endEffectors: [{ type: endEffectorsSchema }],
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

const processesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
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



