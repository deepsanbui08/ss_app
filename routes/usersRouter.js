const express=require("express");
const router=express.Router();
const User = require("../models/user-model");


router.get("/",(req,res)=>{
    res.render("register")
})
// // registration route

// router.post('/signup',async (req,res)=>{

// });

// // login route

// router.post('/login',async (req,res)=>{

// });

module.exports= router;