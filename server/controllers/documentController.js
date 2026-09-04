const Document = require("../models/Document");

// Create Document
const createDocument = async (req, res) => {
    try {
        const documentData = {
            ...req.body,
            user: req.user._id
        };

        if (req.file) {
            documentData.fileUrl = `/uploads/${req.file.filename}`;
        }

        const document = await Document.create(documentData);

        res.status(201).json({
            message: "Document created successfully",
            document
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
};

// Get All Documents (own documents only, unless admin)
const getAllDocuments = async (req, res) => {
    try {
        const filter = req.user.role === "admin" ? {} : { user: req.user._id };

        const documents = await Document.find(filter).sort({ createdAt: -1 });

        res.status(200).json(documents);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get Single Document
const getDocumentById = async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);

        if (!document) {
            return res.status(404).json({
                message: "Document not found"
            });
        }

        if (req.user.role !== "admin" && document.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "Access denied"
            });
        }

        res.status(200).json(document);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Update Document
const updateDocument = async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);

        if (!document) {
            return res.status(404).json({
                message: "Document not found"
            });
        }

        if (req.user.role !== "admin" && document.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "Access denied"
            });
        }

        const updateData = { ...req.body };

        if (req.file) {
            updateData.fileUrl = `/uploads/${req.file.filename}`;
        }

        const updatedDocument = await Document.findByIdAndUpdate(
            req.params.id,
            updateData,
            { new: true }
        );

        res.status(200).json({
            message: "Document updated successfully",
            document: updatedDocument
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Delete Document
const deleteDocument = async (req, res) => {
    try {
        const document = await Document.findById(req.params.id);

        if (!document) {
            return res.status(404).json({
                message: "Document not found"
            });
        }

        if (req.user.role !== "admin" && document.user.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                message: "Access denied"
            });
        }

        await Document.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: "Document deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createDocument,
    getAllDocuments,
    getDocumentById,
    updateDocument,
    deleteDocument,
};
