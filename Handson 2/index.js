const mongoClient = require("mongodb").MongoClient;

const mongoUrl = "mongodb://localhost:27017";

mongoClient.connect(mongoUrl,(err, suc)=>{  //mongo command
    if (err) console.log(err);
    const actualDb = suc.db("HR");   
    // const employeeData = [
    //     {
          
    //       firstName: 'Niraj',
    //       lastName: 'Singh',
    //       experience: 5,
    //       salary: 30000,
    //       company: 'y',
    //       graduated: 2015
    //  },
    //     {
         
    //       fisrtName: 'Ashwani',
    //       lastName: 'Rai',
    //       experience: 2,
    //       salary: 75000,
    //       company: 'x',
    //       graduated: 2017
    //     },
    //     {
         
    //       firstName: 'Pawan',
    //       lastName: 'Rao',
    //       experience: 4,
    //       salary: 50000,
    //       company: 'z',
    //       graduated: 2014
    //     },
    //     {
          
    //       firstName: 'Ribhu',
    //       lastName: 'Ghosh',
    //       experience: 4,
    //       salary: 40000,
    //       company: 'b',
    //       graduated: 2017
    //     }
    //   ]
    // actualDb.collection("employee").insertMany(employeeData,(err, suc)=>{
         //     if (err) console.log(err);
    //     console.log("Data Inserted");
    // })
        
    // find employee salary more than 30000

    // actualDb.collection("employee").find({salary:{$gt:30000}}).toArray((err, result)=>{
    //     if (err) console.log(err);
    //     console.log("Employee Find");
    // })

    // Employee who having more than 2 years experience
    // actualDb.collection("employee").find({experience:{$gt:2}}).toArray((err,result)=>{
    //     if(err) console.log(err);
    //     console.log("Employee Find");
    // })

    // Employee who had graduated in 2015 and having more than experience 1 year

    // actualDb.collection("employee").find({experience:{$gt:1}},{graduated:{$gt:2015}}).toArray((err,result)=>{
    //     if(err) console.log(err);
    //     console.log("Employee Find");
    // })

    // Update the salary of employee having 75000 to 65000

    // let query= {company:'x'};
    // let newData ={salary:65000};

    // actualDb.collection("employee").updateOne(query,{$set:newData},(err,result)=>{
    //         if(err) console.log(err);
    //         console.log("Salary Change");
    //     })

    // Delete employee whose last company is y
    
    let query={company:'y'};
    actualDb.collection("employee").deleteOne(query,(err,result)=>{
                if(err) console.log(err);
                console.log("Employee Removed from database");
            })
    
})