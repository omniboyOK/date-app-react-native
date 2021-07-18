const { combineReducers } = require("@reduxjs/toolkit");
import AppReducer from "./slices/app/app";
import UserReducer from "./slices/userAccount/userAccount";

/** All reducers actions combined */
export default combineReducers({
  app: AppReducer,
  user: UserReducer,
});
