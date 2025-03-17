const userModel = require("../models/user-model");
const bcrypt = require('bcrypt')
const {generateToken}=require("../utils/generateToken")


module.exports.registerUser= async (req,res)=>{
    try{
        let {Name,DOB,Gender,Ph_No,Ad_No,PsW}=req.body
        let user=await userModel.findOne({aadharNumber:Ad_No});
        if (user)
        {
            req.flash("error","User already registered,Please login");
            return res.status(500).redirect("/register");
        } 

        bcrypt.genSalt(10,function(err,salt){
            bcrypt.hash(PsW,salt,async function(err,hash){
                if(err){
                    req.flash("error",err.message);
                    res.status(500).redirect("/register");
                }
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
                    req.flash("success","User created successfully");
                    res.redirect("/users/profile");
                }
            });  
        });
    }
    catch(err){
        if (!res.headersSent){
            req.flash("error",err.message);
            res.redirect("/register");
        }
    }
    
}

module.exports.loginUser=async (req,res)=>{
    try{
        let {Ad_No,PsW}=req.body;

        let user=await userModel.findOne({aadharNumber:Ad_No});
        if(!user){
            req.flash("error","Aadhar Number or Password is incorrect!");
            return res.redirect("/");
        } 
        
        bcrypt.compare(PsW,user.password,(err,result)=>{
            if(result){
                let token=generateToken(user);
                res.cookie("token",token);
                req.flash("success","You are loggedin");
                res.redirect("/users/profile");
            }
            else{
                req.flash("error","Aadhar Number or Password is incorrect!");
                res.redirect("/");
            }
        })
    }
    catch(err){
        if (!res.headersSent){
            req.flash("error",err.message);
            res.redirect("/");
        }
       
    }
}