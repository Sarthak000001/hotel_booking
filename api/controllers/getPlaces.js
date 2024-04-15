const PlaceModel = require("../models/Place.js")
const jwt=require('jsonwebtoken');  
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;

exports.getPlaces=async(req,res)=>{
    const {token}=req.cookies;
    jwt.verify(token,JWT_SECRET,{},async(err,tokenPayLoadData)=>{
        const {id}=tokenPayLoadData;
        res.json(await PlaceModel.find({owner:id}));
        
    });
}