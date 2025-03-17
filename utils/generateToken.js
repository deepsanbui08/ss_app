const jwt = require('jsonwebtoken');
require("dotenv").config();
module.exports.generateToken=(user)=>{
    return jwt.sign({aadhar_No:user.aadharNumber,id:user._id},process.env.JWT_KEY);
};;