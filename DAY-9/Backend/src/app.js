const express = require("express");
const app = express();
const authRoute = require("./routes/auth.routes.js");
const cookie = require("cookie-parser");
const userModel = require("./Models/user.model.js")


app.use(express.json());
app.use(cookie());

// Create user
app.post("/api/create/user", async (req,res) => {
  const {username, email, password} = req.body;

  const user = await userModel.create({
    email,password,username
  })
  res.status(200).json({
    message: "User create Successfully:-",
    user,
  })
});

// GET All USER

app.get("/api/getAlluser", async (req,res) => {
     const allUser = await userModel.find();
     res.status(200).json({
      message: "User get successfully:-",
      allUser,

     })
});

// DELTE -USERS
app.delete("/api/delte/:id", async (req,res) => {
  const id = req.params.id;
  console.log(id);
  await userModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "user Delted successfully",
  })
})



app.use("/api/auth", authRoute);

module.exports = app;