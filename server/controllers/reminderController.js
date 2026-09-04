const Reminder = require("../models/Reminder");


// Get all reminders
const getReminders = async (req, res) => {

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
    getReminders
};