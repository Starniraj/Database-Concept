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

var rec1 =[{
          
    //       "firstName": "Niraj",
    //       "lastName": "Singh",
    //       "experience": "5",
    //       "salary": "30000",
    //       "company: "y",
    //       "graduated": "2015"
    //  },
    //     {
         
    //       "fisrtName": "Ashwani",
    //       "lastName": "Rai",
    //       "experience": "2",
    //       "salary": "75000",
    //       "company": "x",
    //       "graduated": "2017"
    //     },
    //     {
         
    //       "firstName": "Pawan",
    //       "lastName": "Rao",
    //       "experience": "4",
    //       "salary": "50000",
    //       "company": "z",
    //       "graduated": "2014"
    //     },
    //     {
          
    //       "firstName": "Ribhu",
    //       "lastName": "Ghosh",
    //       "experience": "4",
    //       "salary": "40000",
    //       "company": "b",
    //       "graduated": "2017"
    //     }]

//connection to database

mongoose.connect(url,async(err,connection)=>{
    if(err) console.log(err);
    else console.log("Connection successful")

})

/creating collections

    const employee = mongoose.model("employee",dbSchema);
  
  //inserting documents
  
    // const insert = employee.insertMany(rec1);
    // console.log(insert);
  
  //display all the documents

const docs = await employee.find({});
    console.log(docs);

// const expgt = {experience:{$gt:2}};
    // const experiencegt = await employee.find(expgt);
    // console.log(experiencegt);

  //year graterthan 2015 and experience morethan 1

    // const grdgt = {graduated:{$gt:2015},experience:{$gt:1}};
    // const gebgt = await employee.find(grdgt);
    // console.log(gebgt);
  
  //updating salary greaterthan 70000- 65000

    // const salup = {salary:{$gt:70000}}
    // const salaup = {$set:{salary:65000}}
    // const salaupdate = await employee.updateMany(salup,salaup);
    // console.log(salaupdate);
  
  //deleting document having lastcompany Y

    // const empdel = {company:"y"};
    // const empdelete = await employee.deleteMany(empdel);
    // console.log(empdelete)
})

// const employee = mongoose.model("employee",dbSchema);
  
  // salary graterthan 30000

    // const salgt = {salary:{$gt:30000}}
    // const salgrater = await employee.find(salgt);
    // console.log(salgrater)
  
  //experience morethan 2
  
