import { StyleSheet } from "react-native";

const styles = (theme) =>
  StyleSheet.create({
    screen: {
      flex: 1,
      flexDirection: "column",
      margin: 10,
    },
    profile: {
      flexDirection: "column",
      height: "50%",
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
    main: {
      flex: 4,
      alignItems: "center",
      justifyContent: "center",
    },
    picture: {
      height: 120,
      width: 120,
      borderRadius: 100,
    },
    actionMenu: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      width: "80%",
    },
    iconButton: {
      height: 35,
      width: 35,
      alignSelf: "center",
      tintColor: theme.colors.snowWhite,
    },
    iconContainer: {
      justifyContent: "center",
      borderRadius: 60,
      height: 65,
      width: 65,
      backgroundColor: theme.colors.tundrLight,
      shadowColor: theme.colors.tundrStrong,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 2,
    },
    username: {
      fontFamily: theme.fontFamily.pangramBold,
    },
    textContainer: {
      marginVertical: 5,
      fontFamily: theme.fontFamily.pangramRegular,
    },
  });

export default styles;
