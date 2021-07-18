import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Header from "../components/Header/Header";
import TabNavigationView from "./TabNavBar/BottomTabNavigation";
import theme from "../constants/theme";

const RootStack = createStackNavigator(
  {
    Home: {
      screen: TabNavigationView,
      navigationOptions: {
        header: () => <Header />,
      },
    },
  },
  {
    defaultNavigationOptions: {
      cardStyle: { backgroundColor: theme.colors.snowWhite },
    },
  }
);

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
