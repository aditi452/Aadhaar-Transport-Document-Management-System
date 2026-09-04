const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        documentName: {
            type: String,
            required: true
        },

        documentType: {
            type: String,
            enum: ["Aadhaar", "Driving License", "Vehicle RC", "Passport", "PAN", "Other"],
            default: "Other"
        },

        documentNumber: {
            type: String
        },

        issueDate: {
            type: Date
        },

        expiryDate: {
            type: Date
        },

        status: {
            type: String,
            enum: ["Pending", "Active", "Verified", "Expired"],
            default: "Pending"
        },

        fileUrl: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Document", documentSchema);
