const mongoose = require("mongoose");

const LoginUser = new mongoose.Schema({
  email:{
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
})

const LoginModle = mongoose.model("userLogin", LoginUser);

module.exports = LoginModle;