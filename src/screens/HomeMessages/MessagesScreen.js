import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react/cjs/react.development";
import EmptyMessageList from "./components/EmptyState/EmptyState";

const MessagesScreen = () => {
  const [messageList, setMessageList] = useState([])

  if (messageList.length === 0) return <EmptyMessageList styles={styles.screen}/>

  return (
    <View style={styles.screen}>
      <Text>This is the message list</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MessagesScreen;
