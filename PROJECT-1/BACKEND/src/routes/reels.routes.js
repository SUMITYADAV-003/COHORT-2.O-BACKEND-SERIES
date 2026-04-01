const express = require("express");

const reelsRouter = express.Router();
const reelController = require("../controller/rells.controller.js");
const identifyUser = require("../middleware/auth.middleware.js");
const  uploadReel = require("../config/multer.js");


reelsRouter.post("/upload", identifyUser, uploadReel.single("video", reelController.uploadReel));




module.exports = reelsRouter;


