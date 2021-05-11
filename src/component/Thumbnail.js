import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Layout, Text } from "@ui-kitten/components";

const Thumbnail = (props) => {
  return (
    <Layout style={styles.thumbnail} level="1">
      <Text>{props.username}</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    flex: 1,
    height: Dimensions.get('window').width / 4,
    maxWidth: Dimensions.get('window').width / 4
  },
});

export default Thumbnail;
