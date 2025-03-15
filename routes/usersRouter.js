const express=require("express");
const router=express.Router();
const {registerUser,loginUser}=require("../controllers/authController");


router.get("/",(req,res)=>{
    res.render("login")
})
router.get("/register",(req,res)=>{
    res.render("register")
})

// registration route
router.post('/register',registerUser);

// login route
router.post('/login',loginUser);

module.exports= router;