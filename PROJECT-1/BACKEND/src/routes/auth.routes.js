const express = require("express");
const authRouter = express.Router();
const authController = require("../controller/auth.controller.js");
const identifyUser = require('../middleware/auth.middleware.js');




authRouter.post("/register",authController.registerController);
authRouter.post("/login",authController.loginController);

/* @route GET /api/auth/get-me
 * @desc Get the currently logged in user's information
 * @access Private
*/

authRouter.get("/get-me", identifyUser,authController.getMeController);









module.exports = authRouter;