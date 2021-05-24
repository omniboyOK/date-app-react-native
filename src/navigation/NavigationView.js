import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import GlobalProfilesScreen from "../screens/GlobalProfilesScreen";
import MessagesScreen from "../screens/MessagesScreen";
import UserEditProfileScreen from "../screens/UserMessageScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import Header from "../component/Header";

const NavigationView = createStackNavigator({
  Global: {
    screen: GlobalProfilesScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
  Messages: {
    screen: MessagesScreen,
    navigationOptions: {
      header: () => <Header />,
    },
  },
  User: UserEditProfileScreen,
});

const TabNavigationView = createBottomTabNavigator(
  {
    Global: {
      screen: NavigationView,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <FontAwesome5 name="users" size={24} color={tabInfo.tintColor} />
          );
        },
      },
    },
    Messages: {
      screen: MessagesScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <FontAwesome5
              name="comment-alt"
              size={24}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    User: {
      screen: UserEditProfileScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <FontAwesome5 name="user" size={24} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#754ADB",
    },
  }
);

export default createAppContainer(TabNavigationView);
