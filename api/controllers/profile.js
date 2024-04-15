const UserModel=require("../models/User.js");
const bycrypt=require("bcryptjs");
const jwt=require('jsonwebtoken');  
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;

exports.profile=async(req,res)=>{
    const {token}=req.cookies;
    if(token){
        jwt.verify(token,JWT_SECRET,{},(err,tokenPayLoadData)=>{
            if(err) throw err;
            res.json(tokenPayLoadData);
        });
    }
    else{
        res.json(null);
    }
}