import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: false,
};

const AuthSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    login(state, action) {
      return {
        token: action.payload.token,
        isLoggedIn: true,
      };
    },
    logout() {
      return initialState;
    },
  },
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice;
