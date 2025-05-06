const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const EmployeeModel = require("./models/Employee");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/employee");

app.post("/login", (req, res) => {
  const { email, password } = ree.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("User not exist");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
