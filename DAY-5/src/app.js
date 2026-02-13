const express = require("express");
const noteModel  = require("./moduls/notes.model.js");

const app = express();


app.use(express.json());

// crete a  notes  uses this routes 
app.post("/notes" ,  async (req,res) => {
  const {title, description} = req.body;

  const note = await noteModel.create({
    title, description
  })
  res.status(201).json({
    message: "Notes created Successfully ",
    note

  })
  
});
app.get("/getAllUser", async (req,res) => {
  const Notes = await noteModel.find();
  res.status(201).json({
    message: "Get all notes Successfully ",
    Notes
  })
  
});


module.exports = app;