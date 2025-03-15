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

// encrypting the password

// userSchema.pre('save',async function(next){
//     const person=this;
//     if(!person.isModified('password')){
//         return next();
//     }
//     try{
//         const salt=await bcrypt.genSalt(10);
//         const hashedPass= await bcrypt.hash(person.password,salt);
//         person.password=hashedPass;
//         next();
//     }catch(err){
//         return next(err);
//     }
// });

// userSchema.methods.comparePassword = async function(userPassword){
//     try{
//         // Use bcrypt to compare the provided password with the hashed password
//         const isMatch = await bcrypt.compare(userPassword, this.password);
//         return isMatch;
//     }catch(err){
//         throw err;
//     }
// }


module.exports=mongoose.model('User', userSchema);;