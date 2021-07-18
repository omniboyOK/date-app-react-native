import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { PICTURES } from "../../constants/pictures";
import theme from "../../constants/theme";
import makeStyles from "./Thumbnail.styles";

const Thumbnail = ({ user }) => {
  const styles = makeStyles(theme);
  
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

export default Thumbnail;
