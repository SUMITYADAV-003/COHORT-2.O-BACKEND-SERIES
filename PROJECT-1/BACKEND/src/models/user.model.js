const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "User Name Must Be Required!"],
    unique: [ true, "User name already exists" ],
  },
  email: {
    type: String,
    required: [true, "Email are required!"],
    unique: [true, "Email already exists"],
  }, 
  password: {
    type: String,
    required: [true, "Password Is Required"],
  },
  bio: {
    type: String,
  },
   profileImage: {
        type: String,
        default: "https://ik.imagekit.io/hnoglyswo0/avatar-gender-neutral-silhouette-vector-600nw-2470054311.webp"
    },
})


const UserModel = mongoose.model("users", userSchema);


module.exports =UserModel;