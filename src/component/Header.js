import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/Isologo.png")}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    paddingTop: 26,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    borderBottomWidth: 0.5,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default Header;
