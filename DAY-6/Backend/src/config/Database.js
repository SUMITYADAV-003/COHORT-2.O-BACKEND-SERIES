const mongoose = require("mongoose");

function ConnectToDB() {
  mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected!")
  })
  .catch((err) => {
    console.log(err);
  })
}
module.exports = ConnectToDB;