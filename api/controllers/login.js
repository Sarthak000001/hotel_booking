const UserModel=require("../models/User.js");
const bycrypt=require("bcryptjs");
const jwt=require('jsonwebtoken');  
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;

exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json(
                {
                    success:false,
                    message:"Please fill details completely"
                }
            )
        } 
        try{
            let userfound=await UserModel.findOne({email:email});
            if(!userfound){
                return res.status(401).json(
                    {
                        success:false,
                        message:"User Not Registered"
                    }
                )
            }
            let passOK;
            try{
                passOK=await bycrypt.compare(password,userfound.password);
            }catch(error){
                return res.status(301).json(
                    {
                        success:false,
                        message:"Internal Server Error"
                    }
                )
            }
            if(passOK){
                const payload={
                    email:userfound.email,
                    id:userfound._id,
                    name:userfound.name
                }
                // now we want to create jwt token
                jwt.sign(payload,JWT_SECRET,{},(err,token)=>{
                    if(err) throw err;
                    res.cookie('token',token).json(userfound);
                })
            }
            else{
                return res.status(401).json(
                    {
                        success:false,
                        message:"Incorrect Password"
                    }
                )
            }
        }
        catch(error){
            res.status(401).json(
                {
                    Suceess:false,
                    message:"Internal Server Error",
                    data:error.message
                }
            )
        }
    }catch(error){
        res.status(401).json(
            {
                Suceess:false,
                message:"Internal Server Error",
                data:error.message
            }
        )
    }
}

exports.logout=(req,res)=>{
        res.cookie('token','').json(true)
}