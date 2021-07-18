import { StyleSheet } from "react-native";

const styles = (theme) =>
  StyleSheet.create({
    title: {
      fontSize: 24,
      fontFamily: theme.fontFamily.pangramBold,
      color: theme.colors.tundrStrong,
      marginVertical: 5,
    },
  });

export default styles;
