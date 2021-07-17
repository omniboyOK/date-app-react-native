import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { useState } from "react/cjs/react.development";
import theme from "../../constants/theme";

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
        <View style={styles.actionMenu}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../../../assets/images/icons/image-gallery.png")}
              style={styles.iconButton}
            />
          </View>
          <View style={[styles.iconContainer, { marginTop: 30 }]}>
            <Image
              source={require("../../../assets/images/icons/camera.png")}
              style={styles.iconButton}
            />
          </View>
          <View style={styles.iconContainer}>
            <Image
              source={require("../../../assets/images/icons/pen.png")}
              style={styles.iconButton}
            />
          </View>
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
    backgroundColor: theme.colors.snowWhite,
    height: Dimensions.get("screen").height / 2.5,
  },
  main: {
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  picture: {
    height: (Dimensions.get("screen").width * 0.75) / 3,
    width: (Dimensions.get("screen").width * 0.75) / 3,
    borderRadius: Dimensions.get("screen").width * 0.75,
  },
  iconButton: {
    height: 30,
    width: 30,
    alignSelf: "center",
    tintColor: theme.colors.snowWhite,
  },
  iconContainer: {
    justifyContent: "center",
    borderRadius: 70,
    height: 70,
    width: 70,
    backgroundColor: theme.colors.tundrLight,
  },
  actionMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width * 0.75,
    marginVertical: 15,
  },
});

export default UserEditProfileScreen;
