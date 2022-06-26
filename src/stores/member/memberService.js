import apiService from "../api";
import { ENDPOINT } from "../../shared/constants/constants";

const endpoint = ENDPOINT;

// Get member info
const getMemberInfo = async (id) => {
  const response = await apiService().get(`${endpoint}/member/${id}`);
  return response.data;
};

// Get saved company status
const getSavedStatus = async (companyId) => {
  const response = await apiService().get(
    `${endpoint}/member/saved/${companyId}/check`
  );
  return response.data;
};

// Get list saved
const getListSaved = async () => {
  const response = await apiService().get(`${endpoint}/member/list-saved`);
  return response.data;
};

// Post save
const postSave = async (companyId) => {
  const response = await apiService().post(
    `${endpoint}/member/save/${companyId}`
  );
  return response.data;
};

// Update member info
const updateMemberInfo = async (request) => {
  const response = await apiService().put(
    `${endpoint}/member/${request.memberId}`,
    {
      nickname: request.nickname,
    }
  );
  return response.data;
};

// Update member avatar info
const updateMemberAvatar = async (request) => {
  const response = await apiService().put(
    `${endpoint}/member/${request.memberId}/avatar`,
    {
      avatar: request.avatar,
    }
  );
  return response.data;
};

// Post report
const postReport = async (request) => {
  console.log(request);
  const response = await apiService().post(
    `${endpoint}/member/report/${request.ratingId}`,
    {
      reason: request.data.reason,
    }
  );
  return response.data;
};

const memberService = {
  getMemberInfo,
  updateMemberInfo,
  updateMemberAvatar,
  getSavedStatus,
  postSave,
  getListSaved,
  postReport,
};

export default memberService;
