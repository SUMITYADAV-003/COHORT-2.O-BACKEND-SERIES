const express  = require("express");
const cors = require("cors");


/* require routes*/
const authRouter = require('./routes/auth.routes.js');
const postRouter = require("./routes/post.routes.js");
const userRouter = require("./routes/user.routes.js");
const reelsRouter = require("./routes/reels.routes.js");


const cookieParser = require("cookie-parser");
const app = express();



// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))


/* using routes */
app.use("/api/auth",authRouter);
app.use("/api/posts",postRouter);
app.use("/api/users",userRouter);
app.use("/api/reels",reelsRouter);







module.exports = app;