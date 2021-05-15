import React, { useState } from "react";
import { StyleSheet, Dimensions, View, Image } from "react-native";
import { Text } from "@ui-kitten/components";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import { ProfileModal } from "./ProfileModal";

const Thumbnail = ({ user }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => setIsModalVisible(true)}
      style={styles.thumbnail}
    >
      <Image
        source={user.image || require("../../assets/faces/placeholder.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={{ position: "absolute", padding: 5 }}>
        <Text style={{ color: "white" }}>{user.name}</Text>
        <ProfileModal
          user={user}
          visible={isModalVisible}
          onClose={handleModalClose}
        ></ProfileModal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    backgroundColor: "#4D243D",
    borderColor: "white",
    borderWidth: 0.5,
    flex: 1,
    height: Dimensions.get("window").width / 4,
    maxWidth: Dimensions.get("window").width / 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Thumbnail;
