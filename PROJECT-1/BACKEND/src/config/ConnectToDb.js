const mongoose = require("mongoose");

async function ConnectToDb() {
  await mongoose.connect(process.env.MONGO_URL)

  console.log("Connected to MongoDB")
}
  


module.exports = ConnectToDb;