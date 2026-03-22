const express = require("express");
const postRoute = express.Router();
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middleware/auth.middleware.js");
const postController = require("../controller/post.Controller.js");



postRoute.post("/", upload.single("imgUrl"),identifyUser,postController.createPostController);
postRoute.get("/",identifyUser,postController.getPostController);
postRoute.get("/details/:postId",identifyUser,postController.getPostDetailsController);

/**
 * @route GET /api/posts/feed
 * @description get all the post created in the DB
 * @access private
 */
postRoute.get("/feed",identifyUser, postController.getFeedController);





module.exports = postRoute
