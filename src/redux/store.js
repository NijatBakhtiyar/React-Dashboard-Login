import { configureStore } from "@reduxjs/toolkit";

import validationReducer from "./auth";
import counterReducer from "./counter";
import usersReducer from "./users";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    validate: validationReducer,
    users: usersReducer,
  },
});
