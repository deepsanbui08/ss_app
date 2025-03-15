const mongoose=require("mongoose");
require("dotenv").config();

const mongoUrl= process.env.MONGODB_URL;
mongoose.connect(mongoUrl);
const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected to MongoDB server');
})
db.on('disconnected',()=>{
    console.log(' MongoDB server disconnected');
})
module.exports=db;