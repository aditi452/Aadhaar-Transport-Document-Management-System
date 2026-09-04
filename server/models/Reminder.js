const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema(
{
    document: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Document",
        required: true
    },

    message: {
        type: String,
        required: true
    },

    status: {
        type: String,
        enum: ["Unread", "Read"],
        default: "Unread"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Reminder", reminderSchema);