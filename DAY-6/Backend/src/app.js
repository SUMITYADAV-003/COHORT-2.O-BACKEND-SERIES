const express = require("express");
const noteModel = require("./modles/Notes.modles.js");


const app = express();


app.use(express.json());
// create new note
app.post("/notes",  async (req,res) => {
  const {title,description,age} = req.body;
  const note = await noteModel.create({
    title,description,age
  })
  res.status(201).json({
    message: "Notes created Successfully :-",
    note
  })

})

// factch all notes
app.get("/notes", async (req,res) => {
  let note = await noteModel.find();
  res.status(201).json({
    message: "Get all Notes",
    note,
  })
})

module.exports = app;
