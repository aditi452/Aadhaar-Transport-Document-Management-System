const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    getReminders
} = require("../controllers/reminderController");


router.get("/", protect, getReminders);


module.exports = router;