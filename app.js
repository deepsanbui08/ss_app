const express=require('express');
const app=express();
require("dotenv").config();
const db = require('./middlewares/db');

const bodyparser=require("body-parser");
app.use(bodyparser.json());
const PORT=process.env.PORT||3000;


const userRoutes= require('./routes/userRoutes');

app.use('/Swasthya_Sachetan/',userRoutes);


app.listen(PORT,()=>{
    console.log("server started");
})