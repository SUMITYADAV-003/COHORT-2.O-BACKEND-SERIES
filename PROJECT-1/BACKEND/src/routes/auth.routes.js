const express = require("express");
const authController = require("../controllers/auth.controller.js");





const authRoutes = express.Router();

authRoutes.post("/register",authController.registerController);

authRoutes.post("/login", authController.loginController);









module.exports = authRoutes;


