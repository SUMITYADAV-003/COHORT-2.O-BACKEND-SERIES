const express = require("express");
const identifyUsers = require("../middleware/auth.middleware.js");

const userRoutes =  express.Router();





/**
 * @route POST /api/users/follow/:userid
 * @description Follow a user
 * @access Private
 */

userRoutes.post("/follow/:username")