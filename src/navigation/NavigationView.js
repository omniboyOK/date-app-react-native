import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import GlobalProfilesScreen from "../screens/HomeGlobal/GlobalProfilesScreen";
import UserEditProfileScreen from "../screens/HomeMessages/UserMessageScreen";
import MessagesScreen from "../screens/HomeMessages/MessagesScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import Header from "../component/Header";

const createTabIcon = (tab, name) => (
  <FontAwesome5 name={name} size={24} color={tab.tintColor} />
);

const TabNavigationView = createBottomTabNavigator(
  {
    Global: {
      screen: GlobalProfilesScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => createTabIcon(tabInfo, "users"),
      },
    },
    Messages: {
      screen: MessagesScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => createTabIcon(tabInfo, "comment-alt"),
      },
    },
    User: {
      screen: UserEditProfileScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => createTabIcon(tabInfo, "user"),
      },
    },
  },
  {
    initialRouteName: "Global",
    tabBarOptions: {
      activeTintColor: "#754ADB",
    },
  }
);

const RootStack = createStackNavigator({
  Home: {
    screen: TabNavigationView,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});

export default AppNavigator = createAppContainer(RootStack);
