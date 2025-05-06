const mangoose = require("mongoose");

const EmployeeSchema = new mangoose.Schema({
  name: String,
  email: String,
  password: String,
});

const EmployeeModel = mangoose.model("Employee", EmployeeSchema);
module.exports = EmployeeModel;
