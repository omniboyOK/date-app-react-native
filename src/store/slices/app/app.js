import { createSlice } from "@reduxjs/toolkit";

const sliceName = "app";

export const initialState = {
  darkMode: false,
  loading: true,
  error: false,
};

const appSlice = createSlice({
  name: sliceName,
  initialState: initialState,
  reducers: {
    startLoading(state, action) {
      state.loading = true;
      state.error = false;
    },
    failedLoading(state) {
      state.loading = false;
      state.error = true;
    },
    finishLoading(state) {
      state.loading = false;
      state.error = false;
    },
    resetApp(state) {
      state.loading = true;
      state.error = false;
      state.darkMode = false;
    },
  },
});

export default appSlice.reducer;
