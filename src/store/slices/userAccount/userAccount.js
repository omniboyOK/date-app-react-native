import { createSlice } from "@reduxjs/toolkit";

const sliceName = "user";

export const initialState = {
  id: null,
  name: "Unkown",
  age: 0,
  premium: false,
  loading: true,
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
      state.name = action.payload?.name;
      state.age = action.payload?.age;
      state.id = action.payload?.id;
    },
  },
});

export const Actions = userSlice.actions;

export default userSlice.reducer;
