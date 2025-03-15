const jwt = require('jsonwebtoken');

const generateToken=(user)=>{
    return jwt.sign({aadhar_No:user.aadharNumber,id:user._id},"process.env.JWT_KEY");
};
module.exports.generateToken=generateToken;