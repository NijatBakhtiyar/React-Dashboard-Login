import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import validationReducer from "./auth";
import usersReducer from "./users";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    validate: validationReducer,
    users: usersReducer,
  },
});
