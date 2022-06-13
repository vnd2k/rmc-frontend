import authStorageService from "../authStorageService";
import apiService from "../api";
const endpoint = "http://localhost:8080";

// Register user
const register = async (userData) => {
  const response = await apiService().post(
    `${endpoint}/auth/register`,
    userData
  );
  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await apiService().post(`${endpoint}/auth/login`, userData);
  if (response.data) {
    const { accessToken } = response.data;
    authStorageService().setToken(accessToken);
  }
  return response.data;
};

// Get user by id
const getUser = async (id) => {
  const response = await apiService().get(`${endpoint}/auth/${id}`);
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
  getUser,
};

export default authService;
