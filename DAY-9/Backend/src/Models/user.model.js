const mongoose = require("mongoose");


const userSchma = new mongoose.Schema({
  username: String,
  password: String,
  email: {
    type: String,
   unique: [true, "With This email User account already exists:"]
  }
});


const userModel = mongoose.model("users", userSchma);


module.exports = userModel;