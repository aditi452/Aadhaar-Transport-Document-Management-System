const User = require("../models/User");
const Document = require("../models/Document");
const Reminder = require("../models/Reminder");


// Get all users
const getAllUsers = async (req, res) => {

    try {

        const users = await User.find()
        .select("-password");

        res.status(200).json(users);


    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// Get all documents
const getAllDocuments = async (req, res) => {

    try {

        const documents = await Document.find();

        res.status(200).json(documents);


    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};



// Get all reminders
const getAllReminders = async (req, res) => {

    try {

        const reminders = await Reminder.find()
        .populate("document");

        res.status(200).json(reminders);


    } catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};


module.exports = {
    getAllUsers,
    getAllDocuments,
    getAllReminders
};