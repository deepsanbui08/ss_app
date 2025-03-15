const express=require("express");
const router=express.Router();
const {registerUser}=require("../controllers/authController");


router.get("/",(req,res)=>{
    res.render("register")
})

// registration route
router.post('/register',registerUser);

// // login route

// router.post('/login',async (req,res)=>{

// });

module.exports= router;