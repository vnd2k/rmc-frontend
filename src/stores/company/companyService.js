import apiService from "../api";
import { ENDPOINT } from "../../shared/constants/constants";
const endpoint = ENDPOINT;

// Get company info
const getCompanyInfo = async (id) => {
  const response = await apiService().get(`${endpoint}/company/${id}`);
  return response.data;
};

// Search company
const searchCompany = async (character) => {
  const response = await apiService().get(
    `${endpoint}/company/search/${character}`
  );
  console.log(response);
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

// Update company logo
const updateCompanyLogo = async (request) => {
  const response = await apiService().put(
    `${endpoint}/company/${request.companyId}/logo`,
    {
      logoImage: request.logo,
    }
  );
  return response.data;
};

const companyService = {
  getCompanyInfo,
  searchCompany,
  updateCompanyInfo,
  updateCompanyLogo,
};

export default companyService;
