import { configureStore } from "@reduxjs/toolkit";

import validationReducer from "./auth";
import usersReducer from "./users";

export const store = configureStore({
  reducer: {
    validate: validationReducer,
    users: usersReducer,
  },
});
