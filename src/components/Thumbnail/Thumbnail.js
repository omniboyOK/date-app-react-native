import React from "react";
import { StyleSheet, Dimensions, View, Image, Text, TouchableOpacity} from "react-native";
import { PICTURES } from "../../constants/pictures";
import theme from "../../constants/theme";
import { IS_WEB } from "../../constants/utils";

const Thumbnail = ({ user }) => {
  const profilePic = (image) =>
    PICTURES[image] ? PICTURES[image] : PICTURES.default;

  return (
    <TouchableOpacity style={styles.thumbnail}>
      <Image
        source={profilePic(user.image)}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.username}>{user.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    borderColor: "white",
    borderRadius: 10,
    flex: 1,
    height: IS_WEB
      ? Dimensions.get("screen").width / 10
      : Dimensions.get("screen").width / 4,
    maxHeight: Dimensions.get("screen").width / 4,
    maxWidth: Dimensions.get("screen").width / 4,
    margin: 2,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  username: {
    color: "white",
    margin: 3,
    fontSize: 12,
    fontFamily: theme.fontFamily.pangramRegular,
  },
  textContainer: {
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    overflow: "hidden",
    position: "absolute",
    borderBottomRightRadius: theme.radius.light,
  },
});

export default Thumbnail;
