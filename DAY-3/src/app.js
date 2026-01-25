const express = require("express");


const app = express();

//use middleware to read JSON data
app.use(express.json());




const notes = [];



// create a  new notes :
app.post("/users", (req,res) => {
   notes.push(req.body);

   res.status(201).json({
     message: "Notes  created Successfully :-"
   })
});

// get all notes hear using this  routes
app.get("/users",(req,res) => {
  res.send(notes);
})

// delete notes with using idx
app.delete("/users/:idx",(req,res) => {
  delete notes [req.params.idx]
  console.log(req.params.idx);
  res.status(200).json({
    message: "Notes Delete successfully",
  });
})

app.patch("/users/:idx",(req,res)=> {
    notes[req.params.idx].description = req.body.description;
    res.status(200).json({
      message: "Notes description update successfully",
    })
})





module.exports = app;