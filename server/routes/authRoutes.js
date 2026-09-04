const express = require("express");
const router = express.Router();

const {
    registerUser,
    loginUser
} = require("../controllers/authController");

const {
    sendOTP,
    verifyOTP,
    resetPassword
} = require("../controllers/passwordController");

// REGISTER
router.post("/register", registerUser);

// LOGIN
router.post("/login", loginUser);


// FORGOT PASSWORD
router.post("/forgot-password", sendOTP);


// VERIFY OTP
router.post("/verify-otp", verifyOTP);


// RESET PASSWORD
router.post("/reset-password", resetPassword);


module.exports = router;