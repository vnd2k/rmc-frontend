import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "./adminService";

const initialState = {
  companyList: [],
  reportList: [],
  memberList: [],
  ratingList: [],
  jobList: [],
  report: null,
  company: null,
  isError: false,
  isSuccessAdmin: null,
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

// Get list member
export const getListMember = createAsyncThunk(
  "getListMember",
  async (thunkAPI) => {
    try {
      return await adminService.getListMember();
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete member
export const deleteMember = createAsyncThunk(
  "deleteMember",
  async (memberId, thunkAPI) => {
    try {
      return await adminService.deleteMember(memberId);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get list rating
export const getListRating = createAsyncThunk(
  "getListRating",
  async (thunkAPI) => {
    try {
      return await adminService.getListRating();
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get list report by rating
export const getReportByRating = createAsyncThunk(
  "getReportByRating",
  async (ratingId, thunkAPI) => {
    try {
      return await adminService.getReportByRating(ratingId);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete rating
export const deleteRating = createAsyncThunk(
  "deleteRating",
  async (ratingId, thunkAPI) => {
    try {
      return await adminService.deleteRating(ratingId);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get list job
export const getListJob = createAsyncThunk("getListJob", async (thunkAPI) => {
  try {
    return await adminService.getListJob();
  } catch (error) {
    const message = error?.response?.data?.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete job
export const deleteJob = createAsyncThunk(
  "deleteJob",
  async (jobId, thunkAPI) => {
    try {
      return await adminService.deleteJob(jobId);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get report by id
export const getReportById = createAsyncThunk(
  "getReportById",
  async (reportId, thunkAPI) => {
    try {
      return await adminService.getReportById(reportId);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Put report
export const putReport = createAsyncThunk(
  "putReport",
  async (request, thunkAPI) => {
    try {
      return await adminService.putReport(request);
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
      state.isSuccessAdmin = null;
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
        state.isSuccessAdmin = "getListCompany";
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
        state.isSuccessAdmin = "getCompanyById";
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
        state.isSuccessAdmin = "putCompany";
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
        state.isSuccessAdmin = "putCompanyLogo";
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
        state.isSuccessAdmin = "deleteCompany";
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
        state.isSuccessAdmin = "getListReport";
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
        state.isSuccessAdmin = "deleteReport";
      })
      .addCase(deleteReport.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getListMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessAdmin = "getListMember";
        state.memberList = action.payload;
      })
      .addCase(getListMember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessAdmin = "deleteMember";
      })
      .addCase(deleteMember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getListRating.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessAdmin = "getListRating";
        state.ratingList = action.payload;
      })
      .addCase(getListRating.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getReportByRating.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReportByRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessAdmin = "getReportByRating";
        state.reportList = action.payload;
      })
      .addCase(getReportByRating.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteRating.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessAdmin = "deleteRating";
      })
      .addCase(deleteRating.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getListJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessAdmin = "getListJob";
        state.jobList = action.payload;
      })
      .addCase(getListJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessAdmin = "deleteJob";
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getReportById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getReportById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessAdmin = "getReportById";
        state.report = action.payload;
      })
      .addCase(getReportById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(putReport.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(putReport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccessAdmin = "putReport";
      })
      .addCase(putReport.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;
