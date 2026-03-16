const express  = require("express");


/* require routes*/
const authRouter = require('./routes/auth.routes.js');
const postRouter = require("./routes/post.routes.js");
const userRouter = require("./routes/user.routes.js");


const cookieParser = require("cookie-parser");
const app = express();



// middleware
app.use(express.json());
app.use(cookieParser());


/* using routes */
app.use("/api/auth",authRouter);
app.use("/api/post",postRouter);
app.use("/api/users",userRouter);







module.exports = app;