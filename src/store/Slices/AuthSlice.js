import { createSlice } from "@reduxjs/toolkit";

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
      document.cookie = `authToken=${action.payload.token};`;

      return {
        token: action.payload.token,
      };
    },
    logout() {
      document.cookie =
        "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      return initialState;
    },
  },
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice;
