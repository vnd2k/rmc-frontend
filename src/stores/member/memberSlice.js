import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import memberService from "./memberService";

const initialState = {
  member: null,
  isError: false,
  isSuccess: false,
  isChecked: null,
  isLoading: false,
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

// Update member info
export const updateMemberInfo = createAsyncThunk(
  "updateMember",
  async (request, thunkAPI) => {
    console.log(request);
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

export const memberSlice = createSlice({
  name: "member",
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
      .addCase(getMemberInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMemberInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isChecked = "getMember";
        state.member = action.payload;
      })
      .addCase(getMemberInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.member = null;
      })
      .addCase(updateMemberInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMemberInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
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
        state.isSuccess = true;
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
