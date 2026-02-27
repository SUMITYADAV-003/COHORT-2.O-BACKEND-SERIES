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


});


authRoutes.post("/login", async (req,res) => {
  const {email, password} = req.body;

  const user = await userModel.findOne({email});
  if(!user) {
    return res.status(409).json({
      message: "User not found with this email address",
    })
  }
  const ispasswordMached = user.password === crypto.createHash("md5").update(password).digest("hex");
  if(!ispasswordMached){
    return res.status(401).json({
      message: "Invalid password",
    })
  }
  const token = jwt.sign({
    id: user._id,
  }, process.env.JWT_SECRET);

  res.cookie("jwt_token", token);
  res.status(200).json({
    message: "user logged in",
    user,
  });
 
})


module.exports = authRoutes;


