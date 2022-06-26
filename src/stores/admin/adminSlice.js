import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "./adminService";

const initialState = {
  companyList: [],
  reportList: [],
  company: null,
  isError: false,
  isSuccess: null,
  isLoading: false,
  message: "",
};

// Get list company
export const getListCompany = createAsyncThunk(
  "getListCompany",
  async (thunkAPI) => {
    try {
      return await adminService.getListCompany();
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get company by id
export const getCompanyById = createAsyncThunk(
  "getCompanyById",
  async (companyId, thunkAPI) => {
    try {
      return await adminService.getCompanyById(companyId);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Put company
export const putCompany = createAsyncThunk(
  "putCompany",
  async (request, thunkAPI) => {
    try {
      return await adminService.putCompany(request);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Put company logo
export const putCompanyLogo = createAsyncThunk(
  "putCompanyLogo",
  async (request, thunkAPI) => {
    try {
      return await adminService.putCompanyLogo(request);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete company
export const deleteCompany = createAsyncThunk(
  "deleteCompany",
  async (companyId, thunkAPI) => {
    try {
      return await adminService.deleteCompany(companyId);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get list report
export const getListReport = createAsyncThunk(
  "getListReport",
  async (thunkAPI) => {
    try {
      return await adminService.getListReport();
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete company
export const deleteReport = createAsyncThunk(
  "deleteReport",
  async (reportId, thunkAPI) => {
    try {
      return await adminService.deleteReport(reportId);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = null;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListCompany.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "getListCompany";
        state.companyList = action.payload;
      })
      .addCase(getListCompany.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCompanyById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCompanyById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "getCompanyById";
        state.company = action.payload;
      })
      .addCase(getCompanyById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(putCompany.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(putCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "putCompany";
      })
      .addCase(putCompany.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(putCompanyLogo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(putCompanyLogo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "putCompanyLogo";
      })
      .addCase(putCompanyLogo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteCompany.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "deleteCompany";
      })
      .addCase(deleteCompany.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getListReport.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListReport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "getListReport";
        state.reportList = action.payload;
      })
      .addCase(getListReport.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteReport.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteReport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "deleteReport";
      })
      .addCase(deleteReport.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;
