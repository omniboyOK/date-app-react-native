import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { useState } from "react/cjs/react.development";

const UserEditProfileScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.profile}>
        <View style={styles.main}>
          <Image
            source={require("../../../assets/faces/bobby.png")}
            style={styles.picture}
          />
          <Text>Nombre, Edad</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: Dimensions.get("window").width * 0.75,
            marginVertical: 15,
          }}
        >
          <View style={styles.iconContainer}>
            <Image
              source={require("../../../assets/images/icons/image-gallery.png")}
              style={styles.iconButton}
            />
          </View>
          <Image
            source={require("../../../assets/images/icons/camera.png")}
            style={[styles.iconButton, { marginTop: 30 }]}
          />
          <Image
            source={require("../../../assets/images/icons/pen.png")}
            style={styles.iconButton}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "row",
  },
  profile: {
    padding: 15,
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ffffff",
    height: Dimensions.get("window").height / 2.5,
  },
  main: {
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  picture: {
    height: (Dimensions.get("window").width * 0.75) / 3,
    width: (Dimensions.get("window").width * 0.75) / 3,
    borderRadius: Dimensions.get("window").width * 0.75,
  },
  iconButton: {
    height: 30,
    width: 30,
  },
  iconContainer: {
    borderRadius: 30,
    borderColor: "#000",
    borderWidth: 1.5,
    height: 50,
    width: 50,
    padding: 7
  },
});

export default UserEditProfileScreen;
