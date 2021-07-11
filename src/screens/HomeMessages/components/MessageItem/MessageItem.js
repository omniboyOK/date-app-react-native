import React from "react";
import { View, Text, Image } from "react-native";
import { PICTURES } from "../../../../constants/pictures";

const MessageItem = ({ message, date, image }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        height: 60,
        borderRadius: 10,
        marginVertical: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          resizeMode="stretch"
          style={{ width: 60, height: 60, marginBottom: 30, borderRadius: 10 }}
          source={image ? PICTURES[image] : PICTURES.default}
        />
        <View style={{ marginHorizontal: 14 }}>
          <Text>Name</Text>
          <Text>{message}</Text>
        </View>
      </View>
      <View style={{ marginHorizontal: 14 }}>
        <Text>{date}</Text>
      </View>
    </View>
  );
};

export default MessageItem;
