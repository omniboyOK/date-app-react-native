import React from "react";
import { Dimensions, Platform, SafeAreaView, StyleSheet } from "react-native";
import NavigationView from "./src/navigation/NavigationView";

export default () => {
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
