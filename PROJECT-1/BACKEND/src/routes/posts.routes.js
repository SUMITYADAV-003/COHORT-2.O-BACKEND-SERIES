const express = require("express");
const postRouter = express.Router();
const multer  = require('multer')
const postController = require("../controllers/post.controller.js");
const upload = multer({ storage: multer.memoryStorage() })
const identifyUsers = require("../middleware/auth.middleware.js");




postRouter.post("/",upload.single('imgUrl'), identifyUsers,postController.createPostControler);
postRouter.get("/",identifyUsers, postController.getPostController);
postRouter.get("/details/:postId",identifyUsers, postController.getPostDetailsController);





module.exports = postRouter;