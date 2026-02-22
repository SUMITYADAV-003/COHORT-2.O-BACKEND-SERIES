const express = require("express");
const userModel = require("../Models/user.models.js");
const jwt = require('jsonwebtoken');


const authRoutes = express.Router();

authRoutes.post("/register", async (req,res) => {
   const {username, email, password} = req.body;

   const isUserAlreadyExists = await userModel.findOne({email})

   if(isUserAlreadyExists){
    res.status(400).json({
      messaeg: "User already exists with this email address!",
    })
   }

   const user = await userModel.create({
    username,password,email
   })
   const token = jwt.sign(
    {
       id: user._id,
       email: user.email
    },
    process.env.JWT_SECRETS
  )
    res.cookie("Jwt_Token", token);
   res.status(201).json({
    messaeg: "Users register Successfully!",
    user,
    token
   })


})

module.exports = authRoutes;
