import React from "react";
import { View, Text, Image } from "react-native";
import theme from "../../../../constants/theme";

const EmptyMessageList = ({ styles }) => {
  return (
    <View style={styles}>
      <Image
        resizeMode="stretch"
        style={{ width: 200, height: 200, marginBottom: 30 }}
        source={require("../../../../../assets/images/empty_chat_bubble.png")}
      />
      <Text style={{ fontFamily: theme.fontFamily.pangramMedium }}>
        There are no messages yet!
      </Text>
      <Text style={{ fontFamily: theme.fontFamily.pangramMedium }}>
        Go make new friends
      </Text>
    </View>
  );
};

export default EmptyMessageList;
