const express  = require("express");

/* require routes*/
const authRouter = require('./routes/user.routes.js');
const cookieParser = require("cookie-parser");


const app = express();



// middleware
app.use(express.json());
app.use(cookieParser());


/* using routes */
app.use("/api/auth", authRouter);







module.exports = app;