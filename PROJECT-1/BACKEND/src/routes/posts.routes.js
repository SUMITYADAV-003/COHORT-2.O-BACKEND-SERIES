const express = require("express");
const postRouter = express.Router();
const multer  = require('multer')
const postController = require("../controllers/post.controller.js");
const upload = multer({ storage: multer.memoryStorage() })




postRouter.post("/",upload.single('imgUrl'), postController.createPostControler);





module.exports = postRouterl;