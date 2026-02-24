const express = require("express");
const cookieParser = require('cookie-parser');
const authRoutes = require("./routes/auth.routes.js");
const userRoutes = require("./routes/user.route.js");


const app =  express();



// Middleware
app.use(express.json());
app.use(cookieParser());


// Routes  middleware
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);


// Home routes hear
app.get("/", (req,res) => {
  res.status(200).json({
    message: "This is Home routes:",
  })
});

















module.exports = app;