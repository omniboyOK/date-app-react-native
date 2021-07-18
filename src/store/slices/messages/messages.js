import { createSlice } from "@reduxjs/toolkit";

const sliceName = "messages";

export const initialState = {
  list: [],
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: {
    startFetching(state) {
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
      state.list = action.payload;
    },
  },
});

export const Actions = userSlice.actions;

export default userSlice.reducer;
