const Document = require("../models/Document");
const Reminder = require("../models/Reminder");

const getDashboardData = async (req, res) => {
    try {

        // Total Documents
        const totalDocuments = await Document.countDocuments();

        // Total Reminders
        const totalReminders = await Reminder.countDocuments();

        const today = new Date();

        // Expired Documents
        const expiredDocuments = await Document.countDocuments({
            expiryDate: { $lt: today }
        });

        // Active Documents
        const activeDocuments = await Document.countDocuments({
            expiryDate: { $gte: today }
        });

        // Documents Expiring in Next 30 Days
        const next30Days = new Date();
        next30Days.setDate(today.getDate() + 30);

        const expiringSoon = await Document.countDocuments({
            expiryDate: {
                $gte: today,
                $lte: next30Days
            }
        });

        // Verified Documents
        const verifiedDocuments = await Document.countDocuments({
            status: "Verified"
        });

        // Notifications
        const notifications = totalReminders;

        res.status(200).json({
            totalDocuments,
            activeDocuments,
            expiredDocuments,
            totalReminders,
            verifiedDocuments,
            expiringSoon,
            notifications
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getDashboardData
};