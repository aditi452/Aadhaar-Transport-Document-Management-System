const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// ==========================================
// REGISTER USER
// ==========================================
const registerUser = async (req, res) => {
    try {

        console.log("REGISTER CONTROLLER HIT");
        console.log("REQUEST BODY:", req.body);

        const {
            name,
            email,
            mobile,
            aadhaarNumber,
            dob,
            gender,
            state,
            city,
            password
        } = req.body;
        console.log("========== REGISTER DEBUG ==========");
        console.log("REQ.BODY:", req.body);
        console.log("NAME:", name);
        console.log("EMAIL:", email);
        console.log("MOBILE:", mobile);
        console.log("====================================");


        // Check required fields
        if (
            !name ||
            !email ||
            !mobile ||
            !aadhaarNumber ||
            !dob ||
            !gender ||
            !state ||
            !city ||
            !password
        ) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }


        // Check if user already exists
        const existingUser = await User.findOne({
            email
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }


        // Hash password
        const hashedPassword = await bcrypt.hash(
            password,
            10
        );


        // Create user
        const user = new User({
            name,
            email,
            mobile,
            aadhaarNumber,
            dob,
            gender,
            state,
            city,
            password: hashedPassword,
            role: "user"
        });


        await user.save();


        return res.status(201).json({
    message: "User registered successfully",
    user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        aadhaarNumber: user.aadhaarNumber,
        dob: user.dob,
        gender: user.gender,
        state: user.state,
        city: user.city,
        role: user.role
    }
});

    } catch (error) {

        console.error(
            "REGISTER ERROR:",
            error
        );

        return res.status(500).json({
            message: "Registration failed",
            error: error.message
        });
    }
};



// ==========================================
// LOGIN USER
// ==========================================
const loginUser = async (req, res) => {
    try {

        console.log("LOGIN CONTROLLER HIT");

        const {
            email,
            password
        } = req.body;


        // Check fields
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }


        // Find user
        const user = await User.findOne({
            email
        });


        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }


        // Compare password
        const isPasswordCorrect =
            await bcrypt.compare(
                password,
                user.password
            );


        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }


        // Create JWT
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );


        return res.status(200).json({
            message: "Login successful",

            token,

            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                mobile: user.mobile,
                role: user.role
            }
        });

    } catch (error) {

        console.error(
            "LOGIN ERROR:",
            error
        );

        return res.status(500).json({
            message: "Login failed",
            error: error.message
        });
    }
};



// ==========================================
// EXPORT CONTROLLERS
// ==========================================
module.exports = {
    registerUser,
    loginUser
};