import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { PICTURES } from "../../../../constants/pictures";
import theme from "../../../../constants/theme";
import makeStyles from "./MessageItem.styles";

const MessageItem = ({ message, date, image, name, onPress }) => {
  const styles = makeStyles(theme);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Image
            resizeMode="stretch"
            style={styles.picture}
            source={image ? PICTURES[image] : PICTURES.default}
          />
          <View style={styles.textContainer}>
            <Text style={styles.username}>{name}</Text>
            <Text style={styles.message}>{message}</Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 14 }}>
          <Text>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MessageItem;
