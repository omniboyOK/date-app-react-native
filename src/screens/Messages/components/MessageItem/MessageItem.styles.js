import { StyleSheet } from "react-native";

const styles = (theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 60,
      borderRadius: 10,
      marginVertical: 5,
    },
    picture: {
      width: 60,
      height: 60,
      marginBottom: 30,
      borderRadius: 10,
    },
    leftContent: {
      flexDirection: "row",
    },
    textContainer: { marginHorizontal: 14 },
    username: {
      fontFamily: theme.fontFamily.pangramBold,
    },
    message: {
      fontFamily: theme.fontFamily.pangramRegular,
    },
  });

export default styles;
