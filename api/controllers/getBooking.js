const BookingModel=require("../models/Booking.js")
const jwt=require('jsonwebtoken');  
require('dotenv').config();
const JWT_SECRET=process.env.JWT_SECRET;
exports.getBooking=async(req,res)=>{
    const {token}=req.cookies;
    jwt.verify(token,JWT_SECRET,{},async(err,tokenPayLoadData)=>{
        res.json(await BookingModel.find({user:tokenPayLoadData.id}).populate('place'));
    });
  
} 