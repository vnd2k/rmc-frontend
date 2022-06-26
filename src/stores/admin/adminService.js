import apiService from "../api";
import { ENDPOINT } from "../../shared/constants/constants";
const endpoint = ENDPOINT;

// Get list company
const getListCompany = async () => {
  const response = await apiService().get(`${endpoint}/admin/list-company`);
  return response.data;
};

// Get company by id
const getCompanyById = async (companyId) => {
  const response = await apiService().get(`${endpoint}/company/${companyId}`);
  return response.data;
};

// Update company
const putCompany = async (request) => {
  console.log(request);
  const response = await apiService().put(
    `${endpoint}/admin/company/${request.companyId}`,
    {
      name: request.data.name,
      address: request.data.address,
      type: request.data.type,
      website: request.data.website,
      nation: request.data.nation,
      companySize: request.data.companySize,
      description: request.data.description,
      verified: request.verified,
    }
  );
  return response.data;
};

// Put company logo
const putCompanyLogo = async (request) => {
  const response = await apiService().put(
    `${endpoint}/company/${request.companyId}/logo`,
    {
      logoImage: request.logo,
    }
  );
  return response.data;
};

// Delete company
const deleteCompany = async (companyId) => {
  const response = await apiService().delete(
    `${endpoint}/admin/company/${companyId}`
  );
  return response.data;
};

// Get list report
const getListReport = async () => {
  const response = await apiService().get(`${endpoint}/admin/list-report`);
  return response.data;
};

// Delete report
const deleteReport = async (reportId) => {
  const response = await apiService().delete(
    `${endpoint}/admin/report/${reportId}`
  );
  return response.data;
};

const adminService = {
  getListCompany,
  getCompanyById,
  putCompany,
  putCompanyLogo,
  deleteCompany,
  getListReport,
  deleteReport,
};

export default adminService;
