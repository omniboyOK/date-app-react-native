import React from "react";
import { View, Text } from "react-native";
import makeStyles from "./Blob.styles";

const BlobMessage = ({ leftSided = true, message = "" }) => {
  const style = makeStyles(leftSided);
  return (
    <View
      style={[style.container, leftSided ? style.leftSided : style.rightSided]}
    >
      <Text style={style.text}>{message}</Text>
    </View>
  );
};

export default BlobMessage;
