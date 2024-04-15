const PlaceModel = require("../models/Place.js")

exports.homepagePlaces=async(req,res)=>{
    res.json(await PlaceModel.find());
}