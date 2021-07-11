import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Header from "../components/Header";
import TabNavigationView from "./TabNavBar/BottomTabNavigation";
import MessagesScreen from "../screens/HomeMessages/MessagesScreen";

const RootStack = createStackNavigator({
  Home: {
    screen: TabNavigationView,
    navigationOptions: {
      header: () => <Header />,
    },
  },
  Message: {
    screen: MessagesScreen
  }
});

export default AppNavigator = createAppContainer(RootStack);
