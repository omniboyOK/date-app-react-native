import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import theme from "../../../constants/theme";
import makeStyles from "./PremiumBanner.styles";

const PremiumBanner = () => {
  const styles = makeStyles(theme);
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.text}>Get Premium Now!</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PremiumBanner;
