require("dotenv").config();
const app = require('./src/app.js');
const ConnectToDb = require("./src/config/ConnectToDb.js");





















ConnectToDb();
app.listen(process.env.PORT, (req,res) => {
  console.log(`server is running on port ${process.env.PORT}`)
})

