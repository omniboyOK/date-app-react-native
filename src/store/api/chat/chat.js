const chatData = require("../../../mockup/chats.json");

export const getData = (id) => {
  return chatData.find((element) => element.id === id).messages;
};
