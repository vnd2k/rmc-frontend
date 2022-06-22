import apiService from "../api";
import { ENDPOINT } from "../../shared/constants/constants";

const endpoint = ENDPOINT;

// Get member info
const getMemberInfo = async (id) => {
  const response = await apiService().get(`${endpoint}/member/${id}`);
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

const memberService = {
  getMemberInfo,
  updateMemberInfo,
  updateMemberAvatar,
};

export default memberService;
