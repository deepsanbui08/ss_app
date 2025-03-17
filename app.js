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

// for cache handling
app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.setHeader('Pragma', 'no-cache'); // HTTP 1.0 backward compatibility
    res.setHeader('Expires', '0'); // Forces cache to expire immediately
    next();
});

app.use(session({
        secret: process.env.EXPRESS_SESSION_SECRET, 
        resave: false,
        saveUninitialized: false
    }));
app.use(flash());


    
const PORT=process.env.PORT||3000;

app.use('/',usersRouter);


app.listen(PORT,()=>{
    console.log(`Server running at ${PORT} `);
})




// const postModel = require("./models/postmodel")
// const multerconfig=require('./config/multerconfig')
