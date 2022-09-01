const mongoose = require("mongoose")

const url = "mongodb://127.0.0.1:27017/Human_resource"

const dbSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  salary: Number,
  department: String,
  lastCompany: String,
  lastSalary: Number,
  Exp: Number,
  contact: Number,
  graduated: Number,
  stream: String
})

//connection to database

mongoose.connect(url,async(err,connection)=>{
    if(err) console.log(err);
    else console.log("Connection successful")

})