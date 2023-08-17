const mongoose = require("mongoose");
const {Myemployee}=require('./myemployee.js');
const data= require("./myemployee.js")
const mongoUri = "mongodb://127.0.0.1/employeesy";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>{console.log("db connected :)")}).catch(err=>console.log(err));
const db = mongoose.connection;


const getemployees = () => {
return Myemployee.find()
};


const add=(data)=>{
return Myemployee.create(data)
};



const update = (id, data) => {
  return Myemployee.updateOne({ _id: id }, data);
};


const remove = (id) => {
  return Myemployee.deleteOne({_id: id });
};



module.exports = {
  db,  
  getemployees,
  add,
  update,
  remove
};