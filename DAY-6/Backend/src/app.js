const express = require("express");
const noteModel = require("./modles/Notes.modles.js");
const cors = require("cors");


const app = express();


app.use(express.json());
app.use(cors());
// create new note
app.post("/api/notes",  async (req,res) => {
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
app.get("/api/notes", async (req,res) => {
  let note = await noteModel.find();
  res.status(201).json({
    message: "Get all Notes",
    note,
  })
})
// delete notes using id
app.delete("/api/notes/:id", async (req,res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete(id); 
  res.status(200).json({
    message: "Notes Deleted successfully",
  })
})

/*
 - PATH /api/notes/:id
 - Update the descriptions of the note
 - req.body  = {descriptions}
*/

app.patch("/api/notes/:id", async (req,res) => {
  const id = req.params.id;
  const {description}  =req.body;
  await noteModel.findByIdAndUpdate(id, {description});
  res.status(200).json({
    message: "Update Successfully ",
  })
  
})












module.exports = app;
