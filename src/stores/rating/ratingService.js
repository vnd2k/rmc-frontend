import apiService from "../api";
import { ENDPOINT } from "../../shared/constants/constants";
const endpoint = ENDPOINT;

// Get rating list by companyId
const getRatingList = async (request) => {
  const response = await apiService().get(
    `${endpoint}/rating/${request.companyId}/company`
  );
  return response.data;
};

// Get rating list by memberId
const getRatingListMember = async (id) => {
  const response = await apiService().get(`${endpoint}/rating/${id}/member`);
  return response.data;
};

// Create rating
const postRatingList = async (request) => {
  const response = await apiService().post(`${endpoint}/rating/${request.id}`, {
    positivePoint: request.data.positivePoint,
    pointsToImprove: request.data.pointsToImprove,
    ratingPoint: request.ratingPoint,
    memberId: request.memberId,
  });
  return response.data;
};

// Like rating
const likeRating = async (request) => {
  const response = await apiService().post(
    `${endpoint}/rating/${request.memberId}/like/${request.ratingId}`
  );
  return response.data;
};

// Unlike rating
const unlikeRating = async (request) => {
  const response = await apiService().post(
    `${endpoint}/rating/${request.memberId}/unlike/${request.ratingId}`
  );
  return response.data;
};

// Get rating reaction status
const getReactionStatus = async (request) => {
  const response = await apiService().get(
    `${endpoint}/rating/${request.memberId}/reaction-status/${request.ratingId}`
  );
  return response.data;
};

const ratingService = {
  getRatingList,
  postRatingList,
  getRatingListMember,
  likeRating,
  unlikeRating,
  getReactionStatus,
};

export default ratingService;
