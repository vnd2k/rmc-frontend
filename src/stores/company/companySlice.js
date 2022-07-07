import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import companyService from "./companyService";

const initialState = {
  company: null,
  isError: false,
  isSuccess: null,
  isLoading: false,
  companySearch: [],
  jobList: [],
  cvList: [],
  job: null,
  companyById: null,
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

// Get company by id
export const getCompanyById = createAsyncThunk(
  "getCompanyById",
  async (id, thunkAPI) => {
    try {
      return await companyService.getCompanyInfo(id);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Search company
export const searchCompany = createAsyncThunk(
  "searchCompany",
  async (character, thunkAPI) => {
    try {
      return await companyService.searchCompany(character);
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

// Update company logo
export const updateCompanyLogo = createAsyncThunk(
  "updateLogo",
  async (request, thunkAPI) => {
    try {
      return await companyService.updateCompanyLogo(request);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get list jobs
export const getListJob = createAsyncThunk("getListJob", async (thunkAPI) => {
  try {
    return await companyService.getListJob();
  } catch (error) {
    const message = error?.response?.data?.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// Get list jobs
export const getListJobById = createAsyncThunk(
  "getListJobById",
  async (companyId, thunkAPI) => {
    try {
      return await companyService.getListJobById(companyId);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get jobs
export const getJob = createAsyncThunk("getJob", async (jobId, thunkAPI) => {
  try {
    return await companyService.getJob(jobId);
  } catch (error) {
    const message = error?.response?.data?.message;
    return thunkAPI.rejectWithValue(message);
  }
});

// Post job
export const postJob = createAsyncThunk(
  "postJob",
  async (request, thunkAPI) => {
    try {
      return await companyService.postJob(request);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update job
export const putJob = createAsyncThunk("putJob", async (request, thunkAPI) => {
  try {
    return await companyService.putJob(request);
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
      return await companyService.deleteJob(jobId);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get list cv
export const getListCvByJobId = createAsyncThunk(
  "getListCvByJobId",
  async (jobId, thunkAPI) => {
    try {
      return await companyService.getListCvByJobId(jobId);
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
      state.isSuccess = null;
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
        state.isSuccess = "updateInfoSuccess";
        state.company = action.payload;
      })
      .addCase(updateCompanyInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.company = null;
      })
      .addCase(updateCompanyLogo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCompanyLogo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "updateLogoSuccess";
        state.company = action.payload;
      })
      .addCase(updateCompanyLogo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.company = null;
      })
      .addCase(searchCompany.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchCompany.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.companySearch = action.payload;
      })
      .addCase(searchCompany.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.companySearch = null;
      })
      .addCase(getCompanyById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCompanyById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "getByIdSuccess";
        state.companyById = action.payload;
      })
      .addCase(getCompanyById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.companyById = null;
      })

      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "deleteJobSuccess";
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(putJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(putJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "updateJobSuccess";
      })
      .addCase(putJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(postJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "postJobSuccess";
      })
      .addCase(postJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getListJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "getListJobSuccess";
        state.jobList = action.payload;
      })
      .addCase(getListJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.company = null;
      })
      .addCase(getListJobById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListJobById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "getListJobById";
        state.jobList = action.payload;
      })
      .addCase(getListJobById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.company = null;
      })
      .addCase(getJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getJob.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "getJobSuccess";
        state.job = action.payload;
      })
      .addCase(getJob.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getListCvByJobId.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListCvByJobId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "getListCvByJobId";
        state.cvList = action.payload;
      })
      .addCase(getListCvByJobId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = companySlice.actions;
export default companySlice.reducer;
