const mongoose= require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true,
    },
    gender:{
        type:String,
        enum:['Male','Female','Others'],
        required:true,
    },
    mobile:{
        type:Number,
        required: true,
    },
    
    aadharNumber:{
        type:Number,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }, 
});
module.exports=mongoose.model('User', userSchema);;