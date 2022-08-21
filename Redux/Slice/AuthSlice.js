import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const demoApiCall = 
createAsyncThunk("Auth/auth", async () => {
     // Api Call And retun api responce value
  });

const initialState = {
    status: "idle",
};

export const AuthSlice = createSlice({
    name: "testcase",
    initialState,
    reducers: {
      demo: (state) => {
        state = initialState;
      },
    },
    extraReducers: (builder) => {
        builder
          .addCase(demoApiCall.pending, (state) => {
            // state.status = "loading";
          })
          .addCase(demoApiCall.fulfilled, (state, action) => {
            // state.status = "loading";
        })
        .addCase(demoApiCall.rejected, (state) => {
            // state.status = "loading";
          })
      },
    });
export const {
    demo
} = AuthSlice.actions;
export default AuthSlice.reducer;
      