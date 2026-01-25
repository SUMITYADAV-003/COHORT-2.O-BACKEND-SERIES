/* 

- server create krna
- server ko config krna

*/

/*   */   

const express = require("express");

const app = express();


// using midd to read json data
app.use(express.json());
const users = [];

/* using this rounte to make new users   */
app.post("/users/create", (req,res) => {
   users.push(req.body);
   res.status(201).json({
    message: "users created successfully:-",
   });
});

/* using this routes to get all users */

app.get("/users", (req,res) => {
  res.send(users);
});
/*  using this route to delete user in index wayes  */
app.delete("/users/:index", (req,res) => {
   delete users [req.params.index];
   res.status(201).json({
    message: "users deleted successfully",
   })
});

app.patch("/users/:index", (req,res) => {
  users [req.params.index].description = req.body.description;
  res.status(201).json({
    message: "description are updated successfully",
  });
});




module.exports = app;