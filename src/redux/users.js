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
      state.status = "Loading";
    },

    [getUsers.fulfilled]: (state, action) => {
      state.status = "Success";
      state.data = action.payload;
    },

    [getUsers.rejected]: (state) => {
      state.status = "Error";
    },
  },
});

export default usersSlice.reducer;
