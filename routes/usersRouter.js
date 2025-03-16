const express=require("express");
const router=express.Router();
const {registerUser,loginUser}=require("../controllers/authController");

// registration route
router.get("/register",(req,res)=>{
    const error=req.flash("error")
    res.render("register",{error})
})

router.post('/register',registerUser);

// login route
router.get("/",(req,res)=>{
    const error=req.flash("error")
    res.render("login",{error})
})

router.post('/login',loginUser);

module.exports= router;