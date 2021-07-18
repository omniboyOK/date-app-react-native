import { createSlice } from "@reduxjs/toolkit";

const sliceName = "user";

export const initialState = {
  name: "Paul",
  age: 30,
  loading: true,
  error: false,
};

const userSlice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: {
    startFetching(state, action) {
      state.loading = true;
      state.error = false;
    },
    failedFetching(state) {
      state.loading = false;
      state.error = true;
    },
    successFetching(state, action) {
      state.loading = false;
      state.error = false;
      state.name = action.payload?.name;
      state.age = action.payload?.age;
    },
  },
});

export default userSlice.reducer;
