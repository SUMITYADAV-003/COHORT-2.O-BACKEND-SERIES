const express = require("express");

const app = express();


app.use(express.json());

// crete a  notes  uses this routes 
app.post("/notes" , (req,res) => {
  const {title, description} = req.body;
})


module.exports = app;