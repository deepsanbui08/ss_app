const mongoose=require("mongoose");
// require("dotenv").config();

const mongoUrl= "mongodb://127.0.0.1:27017/Swastya_Sachetan";
mongoose
.connect(mongoUrl)
.then(function(){
    console.log("connected to MongoDB server");
})
.catch(function(err){
    onsole.log(err);
})

module.exports=mongoose.connection;

// const db=mongoose.connection;
// db.on('connected',()=>{
//     console.log('connected to MongoDB server');
// })
// db.on('disconnected',()=>{
//     console.log(' MongoDB server disconnected');
// })
