import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";

// Create a reducer function

// Create a Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
  },
});

// export reducer function to store
export default store;
