import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";

const PeopleIcon = (props) => <Icon {...props} name="people-outline" />;

const MessageIcon = (props) => (
  <Icon {...props} name="message-square-outline" />
);

const ProfileIcon = (props) => <Icon {...props} name="person-outline" />;

const HomeMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <BottomNavigationTab title="PEOPLE" icon={PeopleIcon} onPress={}/>
      <BottomNavigationTab title="MESSAGES" icon={MessageIcon} />
      <BottomNavigationTab title="PROFILE" icon={ProfileIcon} />
    </BottomNavigation>
  );
};

export default HomeMenu;
