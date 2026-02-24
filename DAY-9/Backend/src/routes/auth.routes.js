const express = require("express");
const userModel = require("../Models/user.model.js");
const crypto =  require("crypto");
const jwt = require("jsonwebtoken");


const authRoute = express.Router();

// register routes
authRoute.post("/register", async (req, res) => {

  const { username, email, password } = req.body;


  const isUserAlreadyExists = await userModel.findOne({email})

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message: "User already exists with this email address!"
    })
  }


  
  const hash = crypto.createHash("md5").update(password).digest("hex")

  const user = await userModel.create({
    username, email, password: hash
  })
   
  const token = jwt.sign({
    id: user._id,
    email: user.email
  },
  process.env.JWT_SECRET
)
res.cookie("jwt_token", token);
  res.status(201).json({
    message: "user register successfully:-",
    user,
    token,
  })

});

/*  POST /api/auth/login  */

authRoute.post("/login", async (req,res) => {
  const {email, password} = req.body;

  const user = await userModel.findOne({email});

  if(!user){
    return res.status(404).json({
      message: "User not found with this address",
    })
  }


    const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex")

  if(!isPasswordMatched) {
    return res.status(401).json({
      message: "Invalid password"
    })
  }

  const token = jwt.sign({
    id: user._id,
  },process.env.JWT_SECRET)

  res.cookie("jwt_TOKEN", token)

  res.status(200).json({
    message: "user loggin in",
    user,
  })
  

})



module.exports = authRoute;