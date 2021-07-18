import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import theme from "../../constants/theme";
import PremiumBanner from "./components/PremiumBanner";
import makeStyles from "./UserProfile.styles";

const UserProfile = () => {
  const styles = makeStyles(theme);
  const name = useSelector((state) => state.user.name);
  const age = useSelector((state) => state.user.age);

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
      <PremiumBanner />
    </View>
  );
};

export default UserProfile;
