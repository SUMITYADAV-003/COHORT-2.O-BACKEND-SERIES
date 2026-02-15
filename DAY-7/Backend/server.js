require("dotenv").config();
const app = require("./src/app.js");
const ConnectToDB = require("./src/config/Database.js")



ConnectToDB();
app.listen(process.env.PORT, (req,res) => {
  console.log(`server are running ${process.env.PORT}`);
});