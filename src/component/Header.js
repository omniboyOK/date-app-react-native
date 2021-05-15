import React from "react";
import { Image, StyleSheet, View } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/Isologo.png")}
        resizeMode="contain"
        style={styles.banner}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    paddingTop: 36,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    width: "100%",
    paddingTop: 36,
    height: "100%",
    //color: #9966ff
  }
});
