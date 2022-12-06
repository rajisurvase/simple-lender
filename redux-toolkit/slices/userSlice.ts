import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginData } from "../interfaces/interfaces";

const initialState: loginData = {
  email: ""
};

export const loginUser = createAsyncThunk(
  "/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      // const res = await axiosInstance.post(
      //   "appointment/terminal-appointments-list",
      //   data
      // );

      // return res.data;
    } catch (error) {
      return rejectWithValue([]);
    }
  }
);




export const logInSlice = createSlice({
  name: "login",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoginData: (state, { payload }) => {


      // state.email
    },
    resetLoginData: (state) => {
      state.email = initialState.email;
    }
  },
  extraReducers: {}
});

export const { setLoginData, resetLoginData } = logInSlice.actions;



export default logInSlice.reducer;
