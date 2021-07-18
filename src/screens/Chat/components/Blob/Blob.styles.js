import { Dimensions, StyleSheet } from "react-native";
import theme from "../../../../constants/theme";

const styles = () =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      height: 30,
      minWidth: 50,
      maxWidth: Dimensions.get("screen").width * 0.75,
      borderRadius: theme.radius.medium,
      marginVertical: 10,
      padding: 7,
    },
    text: {
      color: theme.colors.snowWhite,
      fontFamily: theme.fontFamily.pangramMedium,
      alignSelf: "center",
    },
    leftSided: {
      alignSelf: "flex-start",
      backgroundColor: theme?.colors.tundrLight,
      marginLeft: 10,
    },
    rightSided: {
      backgroundColor: theme?.colors.tundrStrong,
      marginRight: 10,
      alignSelf: "flex-end",
    },
  });

export default styles;
