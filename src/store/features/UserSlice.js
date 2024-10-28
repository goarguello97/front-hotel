import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    error: null,
    loading: false,
    logged: false,
    register: null,
    user: {},
    users: [],
  },
  reducers: {},
  extraReducers: {},
});

export default UserSlice.reducer;
