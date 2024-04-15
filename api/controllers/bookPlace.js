const BookingModel=require("../models/Booking.js");
const jwt=require('jsonwebtoken');  
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;
exports.bookPlace=async(req,res)=>{
    const {token}=req.cookies;
    const {place,checkIn,checkOut,numberOfGuests,name,phone,price}=req.body;
    jwt.verify(token,JWT_SECRET,{},async(err,tokenPayLoadData)=>{
        try{
            const doc=await BookingModel.create({
                place,checkIn,checkOut,numberOfGuests,name,phone,price,
                user:tokenPayLoadData.id
            });
            res.json(doc);
        }catch(err){
            res.json(err);
        }
    });
    
    
    
} 