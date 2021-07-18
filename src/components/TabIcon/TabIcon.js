import React from "react";
import { Image } from "react-native";
import makeStyles from "./TabIcon.styles";

const tabIcons = {
  nearby: require("../../../assets/images/icons/nearby.png"),
  messages: require("../../../assets/images/icons/messenger.png"),
  user: require("../../../assets/images/icons/user.png"),
};

const TabIcon = ({ tabInfo = {}, name, size = 14 }) => {
  const styles = makeStyles(size, tabInfo);
  return <Image source={tabIcons[name]} style={styles.image} />;
};

export default TabIcon;
