const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes.js");
const postRouter = require("./routes/posts.routes.js")



const app = express();


app.use(express.json());
app.use(cookieParser());



app.use("/api/auth", authRoutes);
app.use("/api/post", postRouter);










































module.exports = app;





