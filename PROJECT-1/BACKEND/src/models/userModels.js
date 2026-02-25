const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: "String",
    required: [true,  "Username is required "],
    unique: [true, "User name is already exists"],
  },
  email: {
    type: "String",
    unique: [true, "Email already exists"],
    requred: [true, "Email is required"],
  },
  password: {
     type: "String",
     required: [true, "Password is required "],
  },
  bio: "String",
  profileImage:{
    type: "String",
    default: "https://ik.imagekit.io/hnoglyswo0/avatar-gender-neutral-silhouette-vector-600nw-2470054311.webp",
  },
  
})

const userModel = mongoose.model("users", userSchema);