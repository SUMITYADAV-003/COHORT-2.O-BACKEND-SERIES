require("dotenv").config();
const app = require("./src/app.js");
const ConnectedToDb = require("./src/config/ConnectToDb.js");












ConnectedToDb();



app.listen(process.env.PORT, () => {
  console.log(`Server in running on port ${process.env.PORT}`);
})