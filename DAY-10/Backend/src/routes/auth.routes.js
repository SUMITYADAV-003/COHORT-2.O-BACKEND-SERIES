const express = require("express");
const LoginModle = require("../models/Login.model.js");
const authRoutes = express.Router();
const crypto =  require("crypto");
const jwt = require("jsonwebtoken");


// Path :- /register
authRoutes.post("/register", async (req,res) => {
  const {email, password} = req.body;

  const isUserAlreadyExits = await LoginModle.findOne({email});

  if(isUserAlreadyExits){
    return res.status(409).json({
      message: "User already exists with this email address!",
    })
  }
  const hash = crypto.createHash("md5").update(password).digest("hex");

  const user = await LoginModle.create({
    email, password: hash
  })
  const token = jwt.sign({
    id: user._id,
    email: user.email,
  },
  process.env.JWT_SECRET
)
res.cookie("jwt_token", token);
res.status(200).json({
  message: "user register successfully:-",
  user,
  token,
});
})

// Path :- /Login
authRoutes.post("/login", async (req,res) => {
  const {email, password} = req.body;
  const user = await LoginModle.findOne({email});
  if(!user){
    return res.status(404).json({
      message: "User not found for this email address",
    });
  }
 
     const isPasswordMatched = user.password === crypto.createHash("md5").update(password).digest("hex")

  if(!isPasswordMatched){
      return res.status(404).json({
        message: "Invalid password",
      })
    }
    const token = jwt.sign({
      id: user._id,
    }, process.env.JWT_SECRET);
    res.cookie("jwt_token", token);
    res.status(200).json({
      message: "User loging Successfully",
      
    });
})
module.exports = authRoutes;