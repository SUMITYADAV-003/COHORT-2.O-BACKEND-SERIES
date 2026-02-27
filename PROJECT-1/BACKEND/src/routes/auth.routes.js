const express = require("express");
const authControllers = require("../controllers/auth.controllers.js")




const authRoutes = express.Router();


authRoutes.post('/register', authControllers.registerController);
authRoutes.post('/login', authControllers.loginController);










module.exports = authRoutes;


