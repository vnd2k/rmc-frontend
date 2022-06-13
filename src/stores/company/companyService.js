import apiService from "../api";
const endpoint = "http://localhost:8080";

// Get company info
const getCompanyInfo = async (id) => {
  const response = await apiService().get(`${endpoint}/company/${id}`);
  return response.data;
};

// Update company info
const updateCompanyInfo = async (request) => {
  const response = await apiService().put(
    `${endpoint}/company/${request.companyId}`,
    {
      name: request.name,
      address: request.address,
      type: request.type,
      website: request.website,
      companySize: request.companySize,
      nation: request.nation,
      description: request.description,
    }
  );
  return response.data;
};

const companyService = { getCompanyInfo, updateCompanyInfo };

export default companyService;
