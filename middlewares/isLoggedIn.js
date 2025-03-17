const jwt=require('jsonwebtoken');
const userModel=require("../models/user-model");
require("dotenv").config();
module.exports=async (req,res,next)=>{
    if(!req.cookies.token){
        req.flash("error","You need to be logged in first!");
        return res.redirect("/");
    }

    try{
        let decoded=jwt.verify(req.cookies.token,process.env.JWT_KEY);
        //let user=userModel.findOne({aadharNumber:decoded.aadhar_No}).select("-password");
        req.user=decoded;
        
        next();
    }
    catch(err){
        req.flash("error","Something went wrong!");
        res.redirect("/Swasthya_Sachetan/users/");
    }
};