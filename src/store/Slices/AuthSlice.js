import { createSlice } from "@reduxjs/toolkit";
import { setCookies, removeCookies } from "cookies-next";

function getTokenFromCookie() {
  if (typeof window !== "undefined") {
    const [name, value] = document.cookie.split("=");

    if (name === "authToken") return value;
  }
}

const initialState = {
  token: getTokenFromCookie() || "",
};

const AuthSlice = createSlice({
  name: "Authentication",
  initialState,
  reducers: {
    login(state, action) {
      // Clear any existing token
      removeCookies("authToken");

      // Set a new token
      setCookies("authToken", action.payload.token);

      return {
        token: action.payload.token,
      };
    },
    logout() {
      removeCookies("authToken");
      return initialState;
    },
  },
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice;
