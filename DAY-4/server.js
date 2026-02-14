const app = require("./src/app.js");
const mongoose = require("mongoose");

function connectToDb() {
  mongoose.connect("mongodb+srv://sumit:atF3oBEZLbNlweLG@cluster0.drze42w.mongodb.net/day-4")
  .then(() => {
    console.log("Connect to Database ");
  })
  .catch((error) => {
    console.log(error);
  })

}
connectToDb();



app.listen(3000, () => {
  console.log("serer running at port no :-  3000");
})