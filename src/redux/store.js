import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import validationReducer from "./auth";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    validate: validationReducer,
  },
});
