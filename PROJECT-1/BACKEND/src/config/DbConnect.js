const mongoose = require("mongoose");


function ConnectToDb(){
  mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`DB Connected!`);
  })
  .catch((err) => {
    console.log(err);
  })
}



module.exports = ConnectToDb;