const cron = require("node-cron");
const Document = require("../models/Document");
const Reminder = require("../models/Reminder");
const sendEmail = require("./emailService");


// Check expiry every day at 9 AM
cron.schedule("0 9 * * *", async () => {

    try {

        console.log("Checking document expiry...");

        const today = new Date();

        const documents = await Document.find().populate("user", "email name");
        console.log("Total Documents:", documents.length);


        for (const doc of documents) {

            if (doc.expiryDate) {

                const expiry = new Date(doc.expiryDate);

                const difference = expiry - today;

                const daysLeft = Math.ceil(
                    difference / (1000 * 60 * 60 * 24)
                );
                console.log(
                 doc.documentName,
                 "Expiry:",
                 expiry,
                 "Days Left:",
                daysLeft);

                // If document expires within 30 days
                if (daysLeft <= 30 && daysLeft >= 0) {


                    const existingReminder = await Reminder.findOne({
                        document: doc._id
                    });


                    if (!existingReminder) {


                        await Reminder.create({

                            document: doc._id,

                            message: `${doc.documentName} expires in ${daysLeft} days`

                        });


                        console.log(
                            "Reminder created for:",
                            doc.documentName
                        );


                        // Send Email to the document's actual owner
                        if (doc.user && doc.user.email) {

                            await sendEmail(

                                doc.user.email,

                                "Document Expiry Alert",

                                `Hi ${doc.user.name || ""}, your document "${doc.documentName}" will expire in ${daysLeft} days. Please update your document.`

                            );

                        }


                    } else {

                        console.log(
                            "Reminder already exists for:",
                            doc.documentName
                        );

                    }

                }

            }

        }


    } catch (error) {

        console.log(
            "Reminder Error:",
            error.message
        );

    }

});
