require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')



const authRoutes =  require("./routes/auth.routes.js");


app.use(express.json());
app.use(cookieParser())



app.use("/api/auth", authRoutes);


app.listen(process.env.PORT, (req,res) => {
  console.log(`server is running in ${process.env.PORT}`);
})


module.exports = app;