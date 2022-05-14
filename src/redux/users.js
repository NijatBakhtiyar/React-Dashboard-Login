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

// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const usersSlice = createSlice({
//   name: "users",
//   initialState: {
//     users: [],
//   },

//   reducers: {
//     users: async (state, action) => {
//       state.users = await addTodoAsync();
//     },
//   },
// });

// const addTodoAsync = async () => {
//   try {
//     // console.log(data);
//     const { data } = await axios("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     return data;
//     // dispatch(users(response.data));
//   } catch (err) {
//     throw new Error(err);
//   }
// };

// export const { users } = usersSlice.actions;

// export default usersSlice.reducer;
