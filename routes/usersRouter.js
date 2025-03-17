const express=require("express");
const router=express.Router();
const {registerUser,loginUser}=require("../controllers/authController");
const jwtAuth=require('./../middlewares/isLoggedIn');
const User =require('./../models/user-model')
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

router.get('/users/profile',jwtAuth, async (req, res) => {
    try {
        const userData = req.user;
        const userId = userData.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');
        res.render('profile', { user });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

// logout 

router.get('/logout', (req, res) => {
    res.cookie("token",""); 
    req.session.destroy((err) => { // Destroy session (if used)
        if (err) {
            console.error("Logout Error:", err);
            req.flash("error", "Error logging out. Please try again.");
            return res.redirect('/Swasthya_Sachetan/users/profile');
        }// Clear the JWT token
    
        res.redirect('/'); 
    });// Redirect to login page after logout
    });

module.exports= router;