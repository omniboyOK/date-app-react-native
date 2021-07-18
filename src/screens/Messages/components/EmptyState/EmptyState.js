import React from "react";
import { View, Text, Image } from "react-native";
import theme from "../../../../constants/theme";
import makeStyles from "./EmptyState.styles";

const EmptyMessageList = () => {
  const styles = makeStyles(theme);
  return (
    <View style={styles.container}>
      <Image
        resizeMode="stretch"
        style={styles.image}
        source={require("../../../../../assets/images/empty_chat_bubble.png")}
      />
      <Text style={styles.text}>There are no messages yet!</Text>
      <Text style={styles.text}>Go make new friends</Text>
    </View>
  );
};

export default EmptyMessageList;
