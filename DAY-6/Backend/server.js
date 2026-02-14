

require("dotenv").config();
const app = require("./src/app.js");
const ConnectToDB = require("./src/config/Database.js");


ConnectToDB();
app.listen(process.env.PORT, () => {
  console.log(`Server  running on ${process.env.PORT} `); 
})