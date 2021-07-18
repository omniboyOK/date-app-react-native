import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { PICTURES } from "../../../../constants/pictures";
import theme from "../../../../constants/theme";

const MessageItem = ({ message, date, image, onPress }) => {
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
            <Text style={styles.username}>Name</Text>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
    borderRadius: 10,
    marginVertical: 5,
  },
  picture: {
    width: 60,
    height: 60,
    marginBottom: 30,
    borderRadius: 10,
  },
  leftContent: {
    flexDirection: "row",
  },
  textContainer: { marginHorizontal: 14 },
  username: {
    fontFamily: theme.fontFamily.pangramBold,
  },
  message: {
    fontFamily: theme.fontFamily.pangramRegular,
  },
});

export default MessageItem;
