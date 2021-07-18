const { combineReducers } = require("@reduxjs/toolkit");
import AppReducer from "./slices/app/app";
import UserReducer from "./slices/userAccount/userAccount";
import MessagesReducer from "./slices/messages/messages";
import ChatReducer from "./slices/chat/chat";

/** All reducers actions combined */
export default combineReducers({
  app: AppReducer,
  user: UserReducer,
  messages: MessagesReducer,
  chat: ChatReducer,
});
