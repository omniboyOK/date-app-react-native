import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessagesScreen = (props) => {
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
