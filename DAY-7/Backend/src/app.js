const express = require("express");
const users = require("./models/users.models.js");
const cors = require("cors");



const app = express();

app.use(express.json());
app.use(cors());

/*
  Path /api/users/crete
  - crete a new user
*/
app.post("/api/users/crete", async (req, res) => {
  const { username, email } = req.body;
  const user = await users.create({
    username, email
  })
  res.status(201).json({
    message: "Users  creted Successfully",
    user,
  })

})

/* 
Path /api/user/getallusers
*/
app.get("/api/users/getusers", async (req, res) => {
  const user = await users.find()
  res.status(200).json({
    message: "Featch All users Successfully",
    user
  })
})

app.delete("/api/delete/users/:id", async (req, res) => {
  const id = req.params.id;
  await users.findByIdAndDelete(id);
  res.status(200).json({
    message: "User Deleted Successfully :-"
  })


})

/* 
Path /api/users/update
*/
app.patch("/api/update/users/:id", async (req, res) => {
  const id = req.params.id;
  const { email } = req.body;
  await users.findByIdAndUpdate(id, { email });
  res.status(200).json({
    message: "User email Updated"
  })
})


module.exports = app;