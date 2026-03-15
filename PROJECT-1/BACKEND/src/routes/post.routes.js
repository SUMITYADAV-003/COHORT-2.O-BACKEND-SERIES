const express = require("express");
const postRoute = express.Router();
const multer = require("multer")
const upload = multer({ storage: multer.memoryStorage() })



postRoute("/", upload.single("imgUrl"))