const express=require("express");
const dbConnect=require("../api/config/dbConnect.js");
require("dotenv").config();
const cookieParser=require('cookie-parser')
const PORT=process.env.PORT
const cors=require("cors")
const app=express();

app.use('/uploads',express.static(__dirname+'/uploads'));
//Cors
app.use(cors(
    {
        credentials:true,
        origin:'http://localhost:5173'
    }
));
app.use(express.json());
app.use(cookieParser());


//Mount Routes
const route=require("../api/routes/route.js")
app.use("",route);

//Connection
dbConnect();
app.listen(PORT,()=>{
    console.log("Listening On Port " , PORT ," !!");
})