const postModel = require("../models/posts.models.js");
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")




async function createPostControler(req,res) {
   const {caption, imgUrl} = req.body; 
   console.log(req.body, req.file);
}

module.exports = {
  createPostControler,
}