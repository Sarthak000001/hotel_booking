const PlaceModel = require("../models/Place.js")
const jwt=require('jsonwebtoken');  
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;
exports.addPlace=async(req,res)=>{
    const {token}=req.cookies;
    const {title,address,addedPhotos,description,
           perks,extraInfo,checkIn,checkOut,maxGuests,price
    }=req.body;
    jwt.verify(token,JWT_SECRET,{},async(err,tokenPayLoadData)=>{
        if(err) throw err;
        const placeDoc=await PlaceModel.create(
            {
                owner:tokenPayLoadData.id,
                title,address,photos:addedPhotos,description,
                perks,extraInfo,checkIn,checkOut,maxGuests,price
            }
        );
        res.json(placeDoc);
    });    
}