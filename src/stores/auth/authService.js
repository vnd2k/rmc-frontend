import authStorageService from "../authStorageService";
import apiService from "../api";
const endpoint = "http://localhost:8080/auth";

// Register user
const register = async (userData) => {
  const response = await apiService().post(`${endpoint}/register`, userData);
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await apiService().post(`${endpoint}/login`, userData);
  if (response.data) {
    const { accessToken } = response.data;
    authStorageService().setToken(accessToken);
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
