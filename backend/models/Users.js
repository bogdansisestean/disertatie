const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
    street: {
      type: String,
      required: true,
    },
    ap: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    county: {
      type: String,
      required: true,
    },
});

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
