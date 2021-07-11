import React from "react";
import { Image } from "react-native";

const tabIcons = {
  nearby: require("../../../assets/images/icons/nearby.png"),
  messages: require("../../../assets/images/icons/messenger.png"),
  user: require("../../../assets/images/icons/user.png"),
};

const TabIcon = ({ tabInfo = {}, name, size = 14 }) => {
  return (
    <Image
      source={tabIcons[name]}
      style={{ width: size, height: size, tintColor: tabInfo.tintColor, padding: 5 }}
    />
  );
};

export default TabIcon;
