import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice"; // import the reducer

const preloadState = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return {
      auth: {
        user: JSON.parse(user),
        isLoggedIn: true,
      },
    };
  }
  return undefined;
};

export const store = configureStore({
  reducer: {
    auth: authReducer, // add auth slice to the store
  },
  preloadedState: preloadState(),
});

export default store;
