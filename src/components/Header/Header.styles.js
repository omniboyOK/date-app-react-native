import { StyleSheet } from "react-native";

const styles = () =>
  StyleSheet.create({
    header: {
      backgroundColor: "#ffffff",
      width: "100%",
      height: 80,
      paddingTop: 26,
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: 10,
      borderBottomWidth: 0,

      // shadow
      shadowColor: "#8b53ff",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    image: {
      height: "100%",
      width: "100%",
    },
  });

export default styles;
