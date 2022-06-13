import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import memberReducer from "./member/memberSlice";
import companyReducer from "./company/companySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    member: memberReducer,
    company: companyReducer,
  },
});
