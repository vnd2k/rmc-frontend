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

// Get list jobs
const getListJob = async () => {
  const response = await apiService().get(`${endpoint}/company/job-list`);
  return response.data;
};

// Get  jobs
const getJob = async (jobId) => {
  const response = await apiService().get(`${endpoint}/company/job/${jobId}`);
  return response.data;
};

// Add job
const postJob = async (request) => {
  const response = await apiService().post(`${endpoint}/company/job`, {
    title: request.title,
    description: request.description,
  });
  return response.data;
};

// Edit job
const putJob = async (request) => {
  const response = await apiService().put(
    `${endpoint}/company/job/${request.jobId}`,
    {
      title: request.data.title,
      description: request.data.description,
    }
  );
  return response.data;
};

// Delete job
const deleteJob = async (jobId) => {
  const response = await apiService().delete(
    `${endpoint}/company/job/${jobId}`
  );
  return response.data;
};

const companyService = {
  getCompanyInfo,
  searchCompany,
  updateCompanyInfo,
  updateCompanyLogo,
  getListJob,
  postJob,
  putJob,
  getJob,
  deleteJob,
};

export default companyService;
