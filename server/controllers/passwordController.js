const User = require("../models/User");
const sendEmail = require("../services/emailService");


// ==========================================
// SEND OTP
// ==========================================
const sendOTP = async (req, res) => {
    try {
        const { email } = req.body;

        console.log("SEND OTP REQUEST:", email);

        // Check email
        if (!email) {
            return res.status(400).json({
                message: "Email is required"
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Generate 6-digit OTP
        const otp = Math.floor(
            100000 + Math.random() * 900000
        ).toString();

        // OTP valid for 10 minutes
        const otpExpiry = new Date(
            Date.now() + 10 * 60 * 1000
        );

        // Save OTP in database
        user.otp = otp;
        user.otpExpiry = otpExpiry;

        await user.save();

        // Email details
        const subject = "Password Reset OTP";

        const message = `
Hello ${user.name},

Your OTP for resetting your password is:

${otp}

This OTP is valid for 10 minutes.

If you did not request a password reset, please ignore this email.

Regards,
Aadhaar & Transport Document Management System
        `;

        // Send email
        await sendEmail(
            email,
            subject,
            message
        );

        console.log("OTP SENT SUCCESSFULLY");

        return res.status(200).json({
            message: "OTP sent successfully"
        });

    } catch (error) {
        console.error("SEND OTP ERROR:", error);

        return res.status(500).json({
            message: "Failed to send OTP",
            error: error.message
        });
    }
};


// ==========================================
// VERIFY OTP
// ==========================================
const verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;

        console.log(
            "VERIFY OTP REQUEST:",
            email,
            otp
        );

        // Check required fields
        if (!email || !otp) {
            return res.status(400).json({
                message: "Email and OTP are required"
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Check if OTP exists
        if (!user.otp || !user.otpExpiry) {
            return res.status(400).json({
                message: "OTP not found. Please request a new OTP"
            });
        }

        // Check OTP expiry
        if (new Date() > user.otpExpiry) {
            return res.status(400).json({
                message: "OTP has expired. Please request a new OTP"
            });
        }

        // Check OTP
        if (user.otp !== otp.toString()) {
            return res.status(400).json({
                message: "Invalid OTP"
            });
        }

        console.log("OTP VERIFIED SUCCESSFULLY");

        return res.status(200).json({
            message: "OTP verified successfully"
        });

    } catch (error) {
        console.error("VERIFY OTP ERROR:", error);

        return res.status(500).json({
            message: "Failed to verify OTP",
            error: error.message
        });
    }
};


// ==========================================
// RESET PASSWORD
// ==========================================
const resetPassword = async (req, res) => {
    try {
        const {
            email,
            otp,
            newPassword
        } = req.body;

        console.log(
            "RESET PASSWORD REQUEST:",
            email
        );

        // Check required fields
        if (!email || !otp || !newPassword) {
            return res.status(400).json({
                message:
                    "Email, OTP and new password are required"
            });
        }

        // Password length
        if (newPassword.length < 6) {
            return res.status(400).json({
                message:
                    "Password must be at least 6 characters long"
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Check OTP
        if (
            !user.otp ||
            user.otp !== otp.toString()
        ) {
            return res.status(400).json({
                message: "Invalid OTP"
            });
        }

        // Check OTP expiry
        if (
            !user.otpExpiry ||
            new Date() > user.otpExpiry
        ) {
            return res.status(400).json({
                message:
                    "OTP has expired. Please request a new OTP"
            });
        }

        // Update password
        user.password = newPassword;

        // Remove OTP after successful reset
        user.otp = undefined;
        user.otpExpiry = undefined;

        await user.save();

        console.log(
            "PASSWORD RESET SUCCESSFULLY"
        );

        return res.status(200).json({
            message: "Password reset successfully"
        });

    } catch (error) {
        console.error(
            "RESET PASSWORD ERROR:",
            error
        );

        return res.status(500).json({
            message: "Failed to reset password",
            error: error.message
        });
    }
};


// ==========================================
// EXPORT ALL FUNCTIONS
// ==========================================
module.exports = {
    sendOTP,
    verifyOTP,
    resetPassword
};