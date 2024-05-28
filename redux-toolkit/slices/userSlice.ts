// import { userData } from "@/types/common.type";
import {  createSlice } from "@reduxjs/toolkit";
// import { destroyCookie } from "nookies";
import { userSliceData } from "../interfaces/interfaces";
import { userData } from "@/typescript/types/common.type";
// import { loginAccessTokenCookieName } from "@/config/constants";

const initialState: userSliceData = {
  isLoggedIn: false,
  userData: null
};

export const userSlice = createSlice({
  name: "userSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoginData: (state, { payload }: { payload: userData }) => {
      state.userData = payload;
      state.isLoggedIn = true;
    },
    checkLoggedInServer: (state, { payload }) => {
      state.isLoggedIn = payload?.hasToken;
      state.userData = payload?.user;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
      // destroyCookie(null, loginAccessTokenCookieName);
      // destroyCookie(null, "userDetails");
      window.location.href="/auth/signin"
    }
  }
});

export const { setLoginData, checkLoggedInServer, logout } = userSlice.actions;

export default userSlice.reducer;
