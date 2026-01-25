const app = require("./src/app.js");
const PORT = 3000


app.listen(PORT, (req,res) => {
  console.log("servre is running on :",PORT);
})