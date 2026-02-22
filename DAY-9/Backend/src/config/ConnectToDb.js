const mongoose = require("mongoose");

function ConnectToDb() {
  mongoose.connect(process.env.MONGO_URI)
  .then((res) => {
    console.log("Connect To Db")
  }).catch((err) => {
    console.log(err);
  })
}


module.exports = ConnectToDb;