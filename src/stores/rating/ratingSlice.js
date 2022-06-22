import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ratingService from "./ratingService";

const initialState = {
  ratingList: [],
  isError: false,
  isSuccess: null,
  isLoading: false,
  message: "",
};

// Get ratingList by companyId
export const getRatingList = createAsyncThunk(
  "getRatingList",
  async (request, thunkAPI) => {
    try {
      return await ratingService.getRatingList(request);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get ratingList by memberId
export const getRatingListMember = createAsyncThunk(
  "getRatingListMember",
  async (id, thunkAPI) => {
    try {
      return await ratingService.getRatingListMember(id);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Create rating
export const postRating = createAsyncThunk(
  "postRating",
  async (request, thunkAPI) => {
    try {
      return await ratingService.postRatingList(request);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Like rating
export const likeRating = createAsyncThunk(
  "likeRating",
  async (request, thunkAPI) => {
    console.log(request);
    try {
      return await ratingService.likeRating(request);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Unlike rating
export const unlikeRating = createAsyncThunk(
  "unlikeRating",
  async (request, thunkAPI) => {
    try {
      return await ratingService.unlikeRating(request);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get reaction status
export const getReactionStatus = createAsyncThunk(
  "getReactionStatus",
  async (request, thunkAPI) => {
    try {
      return await ratingService.getReactionStatus(request);
    } catch (error) {
      const message = error?.response?.data?.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const ratingSlice = createSlice({
  name: "rating",
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
      .addCase(getRatingList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRatingList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "getSuccess";
        state.ratingList = action.payload;
      })
      .addCase(getRatingList.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.ratingList = null;
      })
      .addCase(getRatingListMember.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRatingListMember.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "getMemberSuccess";
        state.ratingList = action.payload;
      })
      .addCase(getRatingListMember.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.ratingList = null;
      })
      .addCase(postRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "postSuccess";
      })
      .addCase(likeRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "likeSuccess";
      })
      .addCase(unlikeRating.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = "unlikeSuccess";
      });
  },
});

export const { reset } = ratingSlice.actions;
export default ratingSlice.reducer;
