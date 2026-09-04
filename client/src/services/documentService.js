import api from "./api";

// Returns only the logged-in user's documents (or all, if admin) — see backend documentController
export const getDocuments = async () => {
  const response = await api.get("/documents");
  return response.data;
};

export const getDocumentById = async (id) => {
  const response = await api.get(`/documents/${id}`);
  return response.data;
};

// documentData: { documentName, documentType, documentNumber, issueDate, expiryDate, file }
export const createDocument = async (documentData) => {
  const formData = new FormData();

  Object.entries(documentData).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      formData.append(key, value);
    }
  });

  const response = await api.post("/documents", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};

export const updateDocument = async (id, documentData) => {
  const formData = new FormData();

  Object.entries(documentData).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      formData.append(key, value);
    }
  });

  const response = await api.put(`/documents/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};

export const deleteDocument = async (id) => {
  const response = await api.delete(`/documents/${id}`);
  return response.data;
};
