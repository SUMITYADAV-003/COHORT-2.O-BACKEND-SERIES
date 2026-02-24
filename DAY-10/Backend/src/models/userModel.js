const mongoose = require("mongoose");

const userSchema  = new mongoose.Schema({
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
  role: {
    type: String,
    required: true,
  },

}, {timestamps: true});



const NormalUser = mongoose.model("User1", userSchema);


module.exports = NormalUser;