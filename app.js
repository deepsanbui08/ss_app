require("dotenv").config();
const express=require('express');
const app=express();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

const db = require('./config/mongoose-connection');
const usersRouter= require('./routes/usersRouter');

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser())

app.use(session({
        secret: process.env.EXPRESS_SESSION_SECRET, 
        resave: false,
        saveUninitialized: false
    }));
app.use(flash());
    
const PORT=process.env.PORT||3000;

app.use('/Swasthya_Sachetan/users',usersRouter);


app.listen(PORT,()=>{
    console.log(`Server running at ${PORT} `);
})




// const postModel = require("./models/postmodel")
// const multerconfig=require('./config/multerconfig')
