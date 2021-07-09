import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UserEditProfileScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is your profile</Text>
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

export default UserEditProfileScreen;
