const mongoose=require("mongoose");
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL ,{
        useNewUrlParser:true,
    })
    .then(()=>{
        console.log("Databse Connected Succesfully")
    })
    .catch((error)=>{
        console.log("Databse connection Failure");
        console.error(error.message);
        process.exit(1);
    })
}
module.exports=dbConnect;