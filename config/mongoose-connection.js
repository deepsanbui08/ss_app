
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

