import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import companyService from "./companyService";

const initialState = {
  company: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get company by id
export const getCompanyInfo = createAsyncThunk(
  "getCompany",
  async (id, thunkAPI) => {
    try {
      return await companyService.getCompanyInfo(id);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update company by id
export const updateCompanyInfo = createAsyncThunk(
  "updateCompany",
  async (request, thunkAPI) => {
    try {
      return await companyService.updateCompanyInfo(request);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCompanyInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCompanyInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.company = action.payload;
      })
      .addCase(getCompanyInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.company = null;
      })
      .addCase(updateCompanyInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCompanyInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.company = action.payload;
      })
      .addCase(updateCompanyInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.company = null;
      });
  },
});

export const { reset } = companySlice.actions;
export default companySlice.reducer;
