
const mongoose=require("mongoose");
const config=require("config");
const dbgr=require("debug")("development:mongoose");

const mongoUrl= `${config.get("MONGODB_URI")}/${process.env.MONGODB_NAME}`;

mongoose
.connect(mongoUrl)
.then(function(){
    dbgr("Connected to MongoDB server");
})
.catch(function(err){
    dbgr(err);
})

module.exports=mongoose.connection;

// const db=mongoose.connection;
// db.on('connected',()=>{
//     console.log('connected to MongoDB server');
// })
// db.on('disconnected',()=>{
//     console.log(' MongoDB server disconnected');
// })
