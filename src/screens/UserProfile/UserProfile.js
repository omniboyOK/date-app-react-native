import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../constants/theme";
import { getData } from "../../store/api/userAccount/userAccount";
import { Actions } from "../../store/slices/userAccount/userAccount";

const UserEditProfileScreen = () => {
  const name = useSelector((state) => state.user.name);
  const age = useSelector((state) => state.user.age);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = getData();
    dispatch(Actions.successFetching(data));
  });

  return (
    <View style={styles.screen}>
      <View style={styles.profile}>
        <View style={styles.main}>
          <Image
            source={require("../../../assets/faces/bobby.png")}
            style={styles.picture}
          />
          <Text style={styles.textContainer}>
            <Text style={styles.username}>{name}</Text>, {age}
          </Text>
        </View>
        <View style={styles.actionMenu}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={require("../../../assets/images/icons/image-gallery.png")}
              style={styles.iconButton}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={require("../../../assets/images/icons/camera.png")}
              style={styles.iconButton}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image
              source={require("../../../assets/images/icons/pen.png")}
              style={styles.iconButton}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
  profile: {
    flexDirection: "column",
    height: "50%",
    borderRadius: theme.radius.strong,
    alignItems: "center",
    backgroundColor: theme.colors.snowWhite,

    shadowColor: theme.colors.tundrStrong,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 2,
  },
  main: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  picture: {
    height: 120,
    width: 120,
    borderRadius: 100,
  },
  actionMenu: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "80%",
  },
  iconButton: {
    height: 35,
    width: 35,
    alignSelf: "center",
    tintColor: theme.colors.snowWhite,
  },
  iconContainer: {
    justifyContent: "center",
    borderRadius: 60,
    height: 65,
    width: 65,
    backgroundColor: theme.colors.tundrLight,
    shadowColor: theme.colors.tundrStrong,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 2,
  },
  username: {
    fontFamily: theme.fontFamily.pangramBold,
  },
  textContainer: {
    marginVertical: 5,
    fontFamily: theme.fontFamily.pangramRegular,
  },
});

export default UserEditProfileScreen;
