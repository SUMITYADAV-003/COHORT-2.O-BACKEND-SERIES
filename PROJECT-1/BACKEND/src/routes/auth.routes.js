const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModels.js");
const crypto  = require("crypto");



const authRoutes = express.Router();


authRoutes.post("/register", async(req,res) => {
  const {username, email, password, bio, profileImage} = req.body;
  const isUserAlreadyExists = await userModel.findOne({
    $or: [
       { username },
            { email }
    ],
  })
  if(isUserAlreadyExists) {
    return res.status(409).json({
      message: "User already exists " + (isUserAlreadyExists.email == email ? "Email already exists" : "Username already exists")
    })
  }
  const hash = crypto.createHash("sha256").update(password).digest("hex");

  
 const user = await userModel.create({
  username,
  password: hash,
  email,
  bio,
  profileImage,
 });

 const token = jwt.sign({
  id: user._id,
 }, process.env.JWT_SECRETS, {expiresIn: "1d"});

 res.cookie("jwt_token", token);

 res.status(201).json({
  message: "User Registered successfully",
  user: {
    email: user.email,
    password: user.password,
    username: user.username,
    bio: user.bio,
    profileImage: user.profileImage,
  }
 })


})


module.exports = authRoutes;


