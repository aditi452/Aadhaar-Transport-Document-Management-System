const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

const {
    getAllUsers,
    getAllDocuments,
    getAllReminders
} = require("../controllers/adminController");


// Admin get all users
router.get(
    "/users",
    protect,
    admin,
    getAllUsers
);


// Admin get all documents
router.get(
    "/documents",
    protect,
    admin,
    getAllDocuments
);


// Admin get all reminders
router.get(
    "/reminders",
    protect,
    admin,
    getAllReminders
);


module.exports = router;