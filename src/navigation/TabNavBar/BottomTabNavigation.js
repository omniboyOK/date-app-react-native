import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import GlobalProfilesScreen from "../../screens/HomeGlobal/GlobalProfilesScreen";
import UserEditProfileScreen from "../../screens/UserProfile/UserProfileScreen";
import MessagesScreen from "../../screens/HomeMessages/MessagesScreen";
import TabIcon from "../../components/TabIcon/TabIcon";

const TabNavigationView = createBottomTabNavigator(
  {
    Nearby: {
      screen: GlobalProfilesScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <TabIcon tabInfo={tabInfo} name="nearby" size={24} />
        ),
      },
    },
    Messages: {
      screen: MessagesScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <TabIcon tabInfo={tabInfo} name="messages" size={24} />
        ),
      },
    },
    Profile: {
      screen: UserEditProfileScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <TabIcon tabInfo={tabInfo} name="user" size={24} />
        ),
      },
    },
  },
  {
    initialRouteName: "Nearby",
    tabBarOptions: {
      activeTintColor: "#754ADB",
      style: { height: 55, borderRadius: 10, borderTopWidth: 0 },
    },
  }
);

export default TabNavigationView;
