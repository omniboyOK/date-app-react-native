import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../../constants/theme";

const PremiumBanner = () => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.text}>Get Premium Now!</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    padding: 10,
    height: 70,
    borderRadius: theme.radius.strong,
    alignItems: "center",
    backgroundColor: theme.colors.snowWhite,

    shadowColor: theme.colors.tundrStrong,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 2,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    borderRadius: theme.radius.strong,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.snowWhite,
    borderColor: theme.colors.tundrLight,
    borderWidth: 1,
  },
  text: {
    fontFamily: theme.fontFamily.pangramBold,
    color: theme.colors.tundrStrong,
  },
});

export default PremiumBanner;
