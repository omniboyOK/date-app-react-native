import React from "react";
import { Text } from "react-native";
import theme from "../../constants/theme";
import makeStyles from "./MainTitle.styles";

const MainTitle = ({ text = "" }) => {
  const styles = makeStyles(theme);
  return <Text style={styles.title}>{text}</Text>;
};

export default MainTitle;
