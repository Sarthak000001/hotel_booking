const UserModel=require("../models/User.js");
const bycrypt=require("bcryptjs");
exports.register=async(req,res)=>{
    try{
        
        const {name,email,password}=req.body;
        let hashedPassword;
        try{
            hashedPassword=await bycrypt.hash(password,10);
        }catch(error){
            console.log(error.message);
            return res.status(500).json(
                {
                    success:false,
                    message:"internal server error"
                }
            );
        }
        
        const data = await UserModel.create({
            name,
            email,
            password:hashedPassword
        });
        res.status(200).json(
            {
                Suceess:true,
                message:"User Registered",
                data:data
            }
        ) 
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