const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const employees = new mongoose.Schema({
    name: String,
    imageUrl: String,
    mission:String,
    year: String,
    salary: String,
  });
  
const Myemployee = mongoose.model("Myemployee", employees);

module.exports.Myemployee = Myemployee;