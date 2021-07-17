import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import GlobalProfilesScreen from "../../screens/HomeGlobal/GlobalProfilesScreen";
import UserEditProfileScreen from "../../screens/UserProfile/UserProfileScreen";
import MessagesScreen from "../../screens/MessageScreen/MessagesScreen";
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
          <TabIcon tabInfo={tabInfo} name="nearby" size={30} />
        ),
      },
    },
    Messages: {
      screen: MessageStack,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <TabIcon tabInfo={tabInfo} name="messages" size={30} />
        ),
      },
    },
    Profile: {
      screen: UserEditProfileScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => (
          <TabIcon tabInfo={tabInfo} name="user" size={30} />
        ),
      },
    },
  },
  {
    initialRouteName: "Nearby",
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#754ADB",
      style: {
        height: 50,
        alignContent: "center",
        borderRadius: 17,
        borderTopWidth: 0,
        margin: 10,
        position: "absolute",

        // Shadows
        shadowColor: "#754ADB",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      },
    },
  }
);

export default TabNavigationView;
