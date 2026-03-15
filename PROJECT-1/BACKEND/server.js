
require("dotenv").config();
const app = require("./src/app.js");
const ConnectToDb = require("./src/config/DbConnect.js");
















ConnectToDb();
app.listen(process.env.PORT, (req,res) => {
  console.log(`Server is running on port ${process.env.PORT}`);
})