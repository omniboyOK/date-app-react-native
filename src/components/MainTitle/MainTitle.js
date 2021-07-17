import React from "react";
import { StyleSheet, Text } from "react-native";
import theme from "../../constants/theme";

const MainTitle = ({ text = "" }) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: theme.fontFamily.pangramBold,
    color: theme.colors.tundrStrong,
    marginVertical: 5,
  },
});

export default MainTitle;
