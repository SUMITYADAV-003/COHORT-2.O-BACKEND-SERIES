const express = require("express");

const app = express();


app.get("/user", (req,res) => {
  res.send("User are getting request fine :-");
})






module.exports = app;