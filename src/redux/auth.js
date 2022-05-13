import { createSlice } from "@reduxjs/toolkit";

export const validationSlice = createSlice({
  name: "auth",
  initialState: {
    username: "",
    password: "",
  },
  reducers: {
    validate: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});

export const { validate } = validationSlice.actions;

export default validationSlice.reducer;
