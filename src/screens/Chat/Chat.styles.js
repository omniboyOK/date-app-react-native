import { StyleSheet } from "react-native";

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    input: {
      borderWidth: 1,
      padding: 5,
      borderColor: theme.colors.tundrLight,
      color: theme.colors.tundrStrong,
      fontSize: 16,
      height: 50,
      borderRadius: 7,
      margin: 5,
    },
  });

export default styles;
