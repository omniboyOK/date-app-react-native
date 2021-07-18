import { StyleSheet } from "react-native";

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.snowWhite,
    },
    image: { width: 200, height: 200, marginBottom: 30 },
    text: { fontFamily: theme.fontFamily.pangramMedium },
  });

export default styles;
