const jwt = require('jsonwebtoken');

module.exports.generateToken=(user)=>{
    return jwt.sign({aadhar_No:user.aadharNumber,id:user._id},"process.env.JWT_KEY");
};;