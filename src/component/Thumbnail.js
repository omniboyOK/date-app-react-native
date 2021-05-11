import React, { useState } from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
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
      <View>
        <Layout>
          <Text>{user.name}</Text>
        </Layout>
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
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    flex: 1,
    height: Dimensions.get("window").width / 4,
    maxWidth: Dimensions.get("window").width / 4,
  },
});

export default Thumbnail;
