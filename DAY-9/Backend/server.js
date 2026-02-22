require("dotenv").config();
const app = require("./src/app.js");
const ConnectToDb = require("./src/config/ConnectToDb.js");






ConnectToDb();

app.listen(process.env.PORT, () => {
  console.log(` Server is running ${process.env.PORT}`);
})