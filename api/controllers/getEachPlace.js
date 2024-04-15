const PlaceModel = require("../models/Place.js")
exports.getEachPlace=async(req,res)=>{
    const {id}=req.params;
    res.json(await PlaceModel.findById(id));
}