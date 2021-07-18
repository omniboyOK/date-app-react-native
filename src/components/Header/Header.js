import React from "react";
import { Image, View } from "react-native";
import makeStyles from "./Header.styles";

const Header = () => {
  const styles = makeStyles();
  return (
    <View style={styles.header}>
      <Image
        source={require("../../../assets/Isologo.png")}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};

export default Header;
