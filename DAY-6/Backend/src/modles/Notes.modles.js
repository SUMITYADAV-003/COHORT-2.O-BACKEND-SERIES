const mongoose = require("mongoose");

const noteSchma =  new mongoose.Schema({
  title: String,
  description: String,
  age: Number,
})

const noteModel = mongoose.model("notes", noteSchma);


module.exports = noteModel;