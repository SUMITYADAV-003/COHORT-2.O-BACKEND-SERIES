require('dotenv').config()
const app = require("./src/app.js");
const ConnectToDB  = require("./src/config/database.js");




ConnectToDB();







app.listen(process.env.PORT, () => {
  console.log(`Server is running fine :- ${process.env.PORT}`);
})