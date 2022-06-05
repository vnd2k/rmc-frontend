import authStorageService from "../authStorageService";
import apiService from "../api";
const endpoint = "http://localhost:8080/auth";

// Register user
const register = async (userData) => {
  const response = await apiService().post(`${endpoint}/register`, userData);
  if (response.data) {
    const { token } = response.data;
    authStorageService().setToken(token);
  }
  console.log(response.data);
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await apiService().post(`${endpoint}/login`, userData);
  if (response.data) {
    const { token } = response.data;
    authStorageService().setToken(token);
  }
  return response.data;
};

// Logout user
const logout = () => {
  authStorageService().removeToken();
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
