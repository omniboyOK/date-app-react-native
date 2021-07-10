import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Header from "../components/Header";
import TabNavigationView from "./TabNavBar/BottomTabNavigation";

const RootStack = createStackNavigator({
  Home: {
    screen: TabNavigationView,
    navigationOptions: {
      header: () => <Header />,
    },
  },
});

export default AppNavigator = createAppContainer(RootStack);
