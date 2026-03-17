const express  = require("express");
const cors = require("cors");


/* require routes*/
const authRouter = require('./routes/auth.routes.js');
const postRouter = require("./routes/post.routes.js");
const userRouter = require("./routes/user.routes.js");


const cookieParser = require("cookie-parser");
const app = express();



// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: "http://localhost:5173",
}));


/* using routes */
app.use("/api/auth",authRouter);
app.use("/api/post",postRouter);
app.use("/api/users",userRouter);







module.exports = app;