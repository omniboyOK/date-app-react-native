import { createSlice } from "@reduxjs/toolkit";

const sliceName = "chat";

export const initialState = {
  messages: [],
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
      state.messages = action.payload;
    },
    postMessage(state, action) {
      state.loading = false;
      state.error = false;
      state.messages = [...state.messages, action.payload];
    },
  },
});

export const Actions = userSlice.actions;

export default userSlice.reducer;
