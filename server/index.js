const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables first
dotenv.config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const documentRoutes = require("./routes/documentRoutes");
const reminderRoutes = require("./routes/reminderRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const adminRoutes = require("./routes/adminRoutes");
const profileRoutes = require("./routes/profileRoutes");


// Start reminder service (cron job that checks document expiry)
require("./services/reminderService");


// Connect Database
connectDB();


const app = express();


// Middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log("REQUEST RECEIVED:", req.method, req.url);
    const safeBody = { ...req.body };
    if (safeBody.password) safeBody.password = "***";
    if (safeBody.newPassword) safeBody.newPassword = "***";
    console.log("BODY:", safeBody);
    next();
});
// Uploaded files access
app.use("/uploads", express.static("uploads"));


// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/documents", documentRoutes);
app.use("/api/reminders", reminderRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/profile",profileRoutes);

// Test Route
app.get("/", (req, res) => {

    res.send(
        "Welcome to the Aadhaar & Transport Document Management API"
    );

});


// Server Port
const PORT = process.env.PORT || 5000;


// Start Server
app.listen(PORT, () => {

    console.log(
        `Server is running on Port ${PORT}`
    );

});