import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./rootReducer";

const store = configureStore({
  reducer: mainReducer,
  devTools: false,
});

export default store;
