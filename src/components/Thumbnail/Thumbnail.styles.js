import { Dimensions, StyleSheet } from "react-native";
import { IS_WEB } from "../../constants/utils";

const styles = (theme) =>
  StyleSheet.create({
    thumbnail: {
      flex: IS_WEB ? 6 : 1,
      flexDirection: "row",
      borderColor: "white",
      borderRadius: 10,
      height: IS_WEB
        ? Dimensions.get("screen").height / 4
        : Dimensions.get("screen").width / 4 - 16,
      maxWidth: Dimensions.get("screen").width / 4 - 16,
      margin: 5,
      overflow: "hidden",
      shadowColor: theme.colors.blackHearth,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    image: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
      overflow: "hidden",
    },
    username: {
      color: "white",
      margin: 3,
      fontSize: 12,
      fontFamily: theme.fontFamily.pangramRegular,
    },
    textContainer: {
      backgroundColor: "rgba(52, 52, 52, 0.5)",
      overflow: "hidden",
      position: "absolute",
      borderBottomRightRadius: theme.radius.light,
    },
  });

export default styles;
