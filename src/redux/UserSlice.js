import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {value:{}},
  reducers: {
    addUser: (state, action) => {
      state.value = action.payload;
      console.log(state.value,'user logged in');
    },
  },
});

export const { addUser } = UserSlice.actions;
export default UserSlice.reducer
