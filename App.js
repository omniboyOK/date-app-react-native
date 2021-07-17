import React from "react";
import { Dimensions, Platform, SafeAreaView, StyleSheet } from "react-native";
import NavigationView from "./src/navigation/NavigationView";
import fonts from "./src/constants/fonts";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default () => {
  const [fontsLoaded] = useFonts(fonts);
  
  if (!fontsLoaded) return <AppLoading />;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <NavigationView />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
