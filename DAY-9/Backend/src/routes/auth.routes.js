const express = require("express");
const userModel = require("../Models/user.model.js");


const authRoute = express.Router();


authRoute.post("/register", async (req, res) => {

  const { username, email, password } = req.body;


  const isUserAlreadyExists = await userModel.findOne({email})

  if (isUserAlreadyExists) {
    res.status(400).json({
      message: "User already exists with this email address!"
    })
  }

  const user = await userModel.create({
    username, email, password
  })
  res.status(201).json({
    message: "user register successfully:-",
    user,
  })
})

module.exports = authRoute;