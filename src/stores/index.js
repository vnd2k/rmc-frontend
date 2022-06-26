import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import memberReducer from "./member/memberSlice";
import companyReducer from "./company/companySlice";
import ratingReducer from "./rating/ratingSlice";
import adminReducer from "./admin/adminSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    member: memberReducer,
    company: companyReducer,
    rating: ratingReducer,
    admin: adminReducer,
  },
});
