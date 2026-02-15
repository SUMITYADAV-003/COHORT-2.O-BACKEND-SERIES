const mongoose  = require("mongoose");

function ConnectToDB() {
  mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Databae connected successfully!")
  })
  .catch((err) => {
    console.log(err);
  })
}

module.exports = ConnectToDB;