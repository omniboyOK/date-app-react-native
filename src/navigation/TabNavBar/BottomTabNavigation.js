import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import GlobalProfilesScreen from "../../screens/HomeGlobal/GlobalProfilesScreen";
import UserEditProfileScreen from "../../screens/UserProfile/UserProfileScreen";
import MessagesScreen from "../../screens/HomeMessages/MessagesScreen";
import TabIcon from "../../components/TabIcon/TabIcon";
import { createStackNavigator } from "react-navigation-stack";
import Chat from "../../screens/Message/Chat";

const MessageStack = createStackNavigator({
  Messages: {
    screen: MessagesScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Message: Chat,
});

/** Don´t show the bottom navbar when chating */
MessageStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Message") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

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
      screen: MessageStack,
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
