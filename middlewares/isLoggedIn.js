const jwt=require('jsonwebtoken');
const userModel=require("../models/user-model");

module.exports=async (req,res,next)=>{
    if(!req.cookies.token){
        req.flash("error","You need to be logged in first!");
        return res.redirect("/Swasthya_Sachetan/users/");
    }

    try{
        let decoded=jwt.verify(req.cookies.token,process.env.JWT_KEY);
        let user=userModel.findOne({aadharNumber:decoded.aadhar_No}).select("-password");
        res.user=user;
        next();
    }
    catch(err){
        req.flash("error","Something went wrong!");
        res.redirect("/Swasthya_Sachetan/users/");
    }
};