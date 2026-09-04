const express = require("express");
const router = express.Router();
const upload = require("../config/multerConfig");
const protect = require("../middleware/authMiddleware");

const {
    createDocument,
    getAllDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument,
} = require("../controllers/documentController");

// All document routes require a logged-in user
router.post("/", protect, upload.single("file"), createDocument);
router.get("/", protect, getAllDocuments);
router.get("/:id", protect, getDocumentById);
router.put("/:id", protect, upload.single("file"), updateDocument);
router.delete("/:id", protect, deleteDocument);

module.exports = router;
