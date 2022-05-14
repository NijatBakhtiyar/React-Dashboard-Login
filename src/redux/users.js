import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("usersSlice/getUsers", async () => {
  return await fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
    res.json()
  );
});

const initialState = {
  status: null,
  data: [],
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = "Pending";
    },

    [getUsers.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.data = action.payload;
    },

    [getUsers.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

export default usersSlice.reducer;
