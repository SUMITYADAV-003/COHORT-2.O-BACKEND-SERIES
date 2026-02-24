const express = require("express");
const NormalUser = require("../models/userModel.js");
const userRoutes = express.Router();
const crypto =  require("crypto");
const jwt = require("jsonwebtoken");

/*
  crete user 
  path - /api/user/create/user 
 */
userRoutes.post("/create/user", async (req,res) => {
  const {name, email,password, role} = req.body;

  const  hash = crypto.createHash("md5").update(password).digest("hex")

  const users = await NormalUser.create({
    name, email, password: hash, role
  })

  const token = jwt.sign({
    id: users._id,
    email: users.email,

  },
  process.env.JWT_SECRET,
)
res.cookie("users", token);
res.status(201).json({
  message: "user created successfully :-",
  users,
  token,
});
})

/* 
  crete login user
  path - /api/user/getAllUser
*/
userRoutes.get("/getAllUser", async (req,res) => {
  const allUser = await NormalUser.find();
  res.status(201).json({
    message: "Get All User successfully:-",
    allUser,
  });
})

/* delete users 
Path :- /api/user/delete/:id
*/

userRoutes.delete("/delete/:id", async (req,res) => {
  const id = req.params.id;
  await NormalUser.findByIdAndDelete(id);
  res.status(200).json({
    message: "User Delted successfully:-",
  })
});

/*
  Update routes 
  Path:- /api/user/update/:id
*/
userRoutes.patch("/api/user/update/:id", async (req,res) => {
  const id = req.params.id;
  const {email} = req.body;
  await NormalUser.findByIdAndUpdate(id, {email});
  res.status({
    message: "User email Update  Successfully:-",
  })
})






module.exports = userRoutes