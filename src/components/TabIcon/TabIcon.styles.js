import { StyleSheet } from "react-native";

const styles = (size, tabInfo) =>
  StyleSheet.create({
    image: {
      width: size,
      height: size,
      tintColor: tabInfo.tintColor,
      padding: 5,
    },
  });

export default styles;
