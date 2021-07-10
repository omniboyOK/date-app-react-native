import React, { useState } from "react";
import { StyleSheet, Dimensions, View, Image } from "react-native";
import { Text } from "@ui-kitten/components";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import { ProfileModal } from "./ProfileModal";
import { PICTURES } from "../constants/pictures";

const Thumbnail = ({ user }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  const profilePic = (image) =>
    PICTURES[image] ? PICTURES[image] : PICTURES.default;

  return (
    <View style={styles.thumbnail}>
      <Image
        source={profilePic(user.image)}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={{ position: "absolute" }}>
        <View style={styles.username}>
          <Text style={{ color: "white", margin: 3 }}>{user.name}</Text>
        </View>
        <ProfileModal
          user={user}
          visible={isModalVisible}
          onClose={handleModalClose}
        ></ProfileModal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    borderColor: "white",
    borderRadius: 10,
    flex: 1,
    height: Dimensions.get("window").width / 4,
    maxWidth: Dimensions.get("window").width / 4,
    margin: 0,
    padding: 3,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  username: {
    backgroundColor: "rgba(52, 52, 52, 0.5)",
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    left: 3,
    top: 3,
  },
});

export default Thumbnail;
