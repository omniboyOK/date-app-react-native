import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import NavigationView from "./src/navigation/NavigationView";
import fonts from "./src/constants/fonts";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { IS_WEB } from "./src/constants/utils";
import { Provider } from "react-redux";
import store from "./src/store";

const App = () => {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <SafeAreaView
        style={IS_WEB ? styles.webContainer : styles.mobileContainer}
      >
        <NavigationView />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  mobileContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  webContainer: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: Dimensions.get("window").width / 3,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
  },
});
