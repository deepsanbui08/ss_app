require("dotenv").config();
const express=require('express');
const app=express();
const path = require('path');
const cookieParser = require('cookie-parser');
const db = require('./config/mongoose-connection');
const usersRouter= require('./routes/usersRouter');

// const bodyparser=require("body-parser");
// app.use(bodyparser.json());
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))
app.use(cookieParser())

const PORT=process.env.PORT||3000;

app.use('/Swasthya_Sachetan/users',usersRouter);


app.listen(PORT,()=>{
    console.log(`Server running at ${PORT} `);
})




// const userModel = require("./models/usermodel")
// const postModel = require("./models/postmodel")
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// 
// const multerconfig=require('./config/multerconfig')
// const session = require('express-session');
// const flash = require('connect-flash');





// app.use(session({
//     secret: 'secret', 
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(flash());

// PORT = process.env.PORT || 3000

// app.get('/', (req, res) => {
//     const error=req.flash("error")
//     res.render("loginPage",{error})
// })
