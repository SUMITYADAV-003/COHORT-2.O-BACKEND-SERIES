const express = require("express");
const identifyUser = require('../middleware/auth.middleware.js');
const userController = require("../controller/user.Controller.js");

const userRoutes = express.Router();




/**
 * @route POST /api/users/follow/:userid
 * @description Follow a user
 * @access Private
 */
userRoutes.post("/follow/:username", identifyUser,userController.followUserController);

/** 
 * @route POST /api/users/unfollow/:userid
 * @description Unfollow a user
 * @access Private
 */

userRoutes.post("/unfollow/:username", identifyUser,userController.unfollowUserController)








module.exports = userRoutes;