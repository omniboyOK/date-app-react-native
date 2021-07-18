import { StyleSheet } from "react-native";

const styles = (theme) =>
  StyleSheet.create({
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

export default styles;
