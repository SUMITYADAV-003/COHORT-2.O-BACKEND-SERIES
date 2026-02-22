const mongoose = require("mongoose");

function connectToDB() {
  mongoose.connect(process.env.MONGOOSE_URI)
  .then((res) => {
    console.log("Connect To Db!");
  })
  .catch((err) => {
    console.log(err);
  })
}


module.exports = connectToDB;