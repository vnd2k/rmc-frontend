import axios from "axios";
import authStorageService from "./authStorageService";

const apiService = (moreOptions) => {
  const token = authStorageService().getToken();
  const options = {
    ...moreOptions,
    headers: {
      ...moreOptions?.headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
  return {
    get: (url) => axios.get(url, options),
    post: (url, data) => axios.post(url, data, options),
    put: (url, data) => axios.put(url, data, options),
    delete: (url) => axios.delete(url, options),
  };
};

export default apiService;
