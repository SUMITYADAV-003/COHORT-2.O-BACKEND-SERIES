const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModels.js");


const authRoutes = express.Router();


authRoutes.post("/register", async(req,res) => {
  const {username, email, password, bio, ProfileImage} = req.body;

})


