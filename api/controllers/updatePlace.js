const PlaceModel = require("../models/Place.js")
const jwt=require('jsonwebtoken');  
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;
exports.updatePlace=async(req,res)=>{
    const {token}=req.cookies;
    const {id,title,address,addedPhotos,description,
           perks,extraInfo,checkIn,checkOut,maxGuests,price
    }=req.body;
    jwt.verify(token,JWT_SECRET,{},async(err,tokenPayLoadData)=>{
        const placeDoc=await PlaceModel.findById(id);
        if(tokenPayLoadData.id===placeDoc.owner.toString()){
            placeDoc.set(
                {
                    title,address,photos:addedPhotos,description,
                    perks,extraInfo,checkIn,checkOut,maxGuests,price
                }
            );
            await placeDoc.save();
            res.json('ok');
        }
    });
}