import React from "react";
import { Text, View } from "react-native";
import BlobMessage from "./components/Blob/Blob";

const Chat = () => {
  return (
    <View>
      <BlobMessage message={"Hi there!"} />
      <BlobMessage leftSided={false} message={"General Kenobi"} />
    </View>
  );
};

export default Chat;
