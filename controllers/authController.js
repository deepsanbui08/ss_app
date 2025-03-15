const userModel = require("../models/user-model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {generateToken}=require("../utils/generateToken")


module.exports.registerUser= async (req,res)=>{
    try{
        let {Name,DOB,Gender,Ph_No,Ad_No,PsW}=req.body

        let user=await userModel.findOne({aadharNumber:Ad_No});
        if (user)
        {
            // req.flash("error","User already registered ")
            return res.status(401).redirect("User already registered,Please login")
        } 

        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(PsW,salt,async function(err,hash){
                if(err) return res.send(err.message);
                else{
                    let user=await userModel.create({
                        name:Name,
                        dob:DOB,
                        gender:Gender,
                        mobile:Ph_No,
                        aadharNumber:Ad_No,
                        password:hash
                    });
                    let token=generateToken(user);
                    res.cookie("token",token);
                    res.send("User created succesfully");
                }
            });
        });
    }
    catch(err){
        res.send("err.message");
    }
    
}