import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import memberService from "./memberService";

const initialState = {
  savedList: [],
  member: null,
  saved: null,
  isError: false,
  isSuccess: null,
  isChecked: null,
  isLoading: false,
  isSaved: null,
  message: "",
};

// Get member by id
export const getMemberInfo = createAsyncThunk(
  "getMember",
  async (id, thunkAPI) => {
    try {
      return await memberService.getMemberInfo(id);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get saved company status
export const getSavedStatus = createAsyncThunk(
  "getSavedStatus",
  async (companyId, thunkAPI) => {
    try {
      return await memberService.getSavedStatus(companyId);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get saved list
export const getListSaved = createAsyncThunk(
  "getListSaved",
  async (thunkAPI) => {
    try {
      return await memberService.getListSaved();
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Post save
export const postSave = createAsyncThunk(
  "postSave",
  async (companyId, thunkAPI) => {
    try {
      return await memberService.postSave(companyId);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update member info
export const updateMemberInfo = createAsyncThunk(
  "updateMember",
  async (request, thunkAPI) => {
    try {
      return await memberService.updateMemberInfo(request);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Update member avatar info
export const updateMemberAvatar = createAsyncThunk(
  "updateAvatar",
  async (request, thunkAPI) => {
    try {
      return await memberService.updateMemberAvatar(request);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Post report
export const postReport = createAsyncThunk(
  "postReport",
  async (ratingId, thunkAPI) => {
    try {
      return await memberService.postReport(ratingId);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const memberSlice = createSlice({
  name: "member",
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
      .addCase(getMemberInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMemberInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "getMember";
        state.member = action.payload;
      })
      .addCase(getMemberInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.member = null;
      })
      .addCase(getSavedStatus.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSavedStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "getSavedSuccess";
        state.saved = action.payload;
      })
      .addCase(getSavedStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getListSaved.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getListSaved.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "getListSavedSuccess";
        state.savedList = action.payload;
        state.saved = action.payload;
      })
      .addCase(getListSaved.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(postSave.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postSave.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "postSuccess";
      })
      .addCase(postSave.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(postReport.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postReport.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "postReport";
      })
      .addCase(postReport.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(updateMemberInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMemberInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "updateSuccess";
        state.member = action.payload;
      })
      .addCase(updateMemberInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.member = null;
      })
      .addCase(updateMemberAvatar.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMemberAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "updateAvatarSuccess";
        state.member = action.payload;
      })
      .addCase(updateMemberAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.member = null;
      });
  },
});

export const { reset } = memberSlice.actions;
export default memberSlice.reducer;
