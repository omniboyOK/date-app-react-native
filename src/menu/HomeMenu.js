import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
const HomeMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <BottomNavigationTab title="USERS" />
      <BottomNavigationTab title="ORDERS" />
      <BottomNavigationTab title="TRANSACTIONS" />
    </BottomNavigation>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  menu: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeMenu;
