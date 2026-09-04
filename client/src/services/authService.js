import api from "./api";

// Backend expects: name, email, mobile, aadhaarNumber, dob, gender, state, city, password
export const registerUser = async (data) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

// Backend expects: email, password
// Returns: { message, token, user }
export const loginUser = async (data) => {
  const response = await api.post("/auth/login", data);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get("/users/profile");
  return response.data;
};
